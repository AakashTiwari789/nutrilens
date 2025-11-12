"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function CompanyProductsPage() {
  const router = useRouter();
  const { user, loading, isAuthenticated, login } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    productId: "",
    price: "",
    manufacturingDate: "",
    expiryDate: "",
    nutritionalInfo: JSON.stringify({}),
    ingredients: JSON.stringify([]),
    tags: JSON.stringify([]),
  });
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (!loading && (!isAuthenticated || !user || user.role !== "company")) {
      router.replace("/auth/login?message=Company access required");
    }
    if (user?.accountStatus !== "verified") {
      setError("Only verified companies can manage products");
    }
  }, [loading, isAuthenticated, user, router]);

  useEffect(() => {
    if (user?.role === "company" && user?.accountStatus === "verified") {
      loadProducts();
    }
  }, [user]);

  const loadProducts = async () => {
    try {
      setLoadingProducts(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/user/get-all-products`, {
        method: "GET",
        credentials: "include",
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setProducts(data?.data?.products || []);
      } else {
        setError(data?.message || "Failed to load products");
      }
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoadingProducts(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      if (productImage) {
        formDataToSend.append("productImage", productImage);
      }

      const resp = await fetch(`${apiUrl}/product/register`, {
        method: "POST",
        credentials: "include",
        body: formDataToSend,
      });

      const data = await resp.json();
      if (resp.ok && data?.success) {
        setSuccess("Product submitted for approval successfully");
        setShowAddForm(false);
        setFormData({
          name: "",
          category: "",
          description: "",
          productId: "",
          price: "",
          manufacturingDate: "",
          expiryDate: "",
          nutritionalInfo: JSON.stringify({}),
          ingredients: JSON.stringify([]),
          tags: JSON.stringify([]),
        });
        setProductImage(null);
        setImagePreview(null);
        await loadProducts();
      } else {
        setError(data?.message || "Failed to submit product");
      }
    } catch (err) {
      setError("Failed to submit product");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (productId) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      setError("");
      setSuccess("");
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/product/delete/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setSuccess("Product deleted successfully");
        await loadProducts();
      } else {
        setError(data?.message || "Failed to delete product");
      }
    } catch (err) {
      setError("Failed to delete product");
    }
  };

  if (!loading && (!isAuthenticated || !user || user.role !== "company")) {
    return null;
  }

  if (user?.accountStatus !== "verified") {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 md:ml-48">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Access Restricted</h2>
            <p className="text-red-600">Only verified companies can manage products. Please request verification first.</p>
          </div>
        </div>
      </div>
    );
  }

  const categories = [
    'biscuits', 'breakfast and spreads', 'chocolates and desserts', 
    'cold drinks and juices', 'dairy, bread and eggs', 'instant foods', 
    'snacks', 'cakes and bakes', 'dry fruits, oil and masalas', 
    'meat', 'rice, atta and dals', 'tea, coffee and more', 
    'supplements and mores'
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 md:ml-48">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manage Products</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add New Product
          </button>
        </div>

        {(error || success) && (
          <div className="mb-4">
            {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{error}</div>}
            {success && <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">{success}</div>}
          </div>
        )}

        {loadingProducts ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading products...</div>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="text-gray-500 text-lg mb-4">No products found</div>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Your First Product
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={product.productImage || "/images/nutrilens_logo.png"}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <div className="text-sm text-gray-500">ID: {product.productId}</div>
                    <div className="text-sm text-gray-500 capitalize">{product.category}</div>
                    <div className="text-lg font-bold text-gray-900 mt-2">₹{product.price}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">Status</div>
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    product.isApproved ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {product.isApproved ? "Approved" : "Pending"}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => router.push(`/company/products/edit/${product.productId}`)}
                    className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.productId)}
                    className="flex-1 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Product Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setFormData({
                      name: "",
                      category: "",
                      description: "",
                      productId: "",
                      price: "",
                      manufacturingDate: "",
                      expiryDate: "",
                      nutritionalInfo: JSON.stringify({}),
                      ingredients: JSON.stringify([]),
                      tags: JSON.stringify([]),
                    });
                    setProductImage(null);
                    setImagePreview(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleAddProduct} className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product ID *</label>
                    <input
                      type="number"
                      name="productId"
                      value={formData.productId}
                      onChange={handleInputChange}
                      required
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full border rounded-md px-3 py-2"
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹) *</label>
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Manufacturing Date *</label>
                    <input
                      type="date"
                      name="manufacturingDate"
                      value={formData.manufacturingDate}
                      onChange={handleInputChange}
                      required
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date *</label>
                    <input
                      type="date"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nutritional Info (JSON) *</label>
                  <textarea
                    name="nutritionalInfo"
                    value={formData.nutritionalInfo}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full border rounded-md px-3 py-2 font-mono text-sm"
                    placeholder='{"calories": 100, "protein": 5, ...}'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients (JSON Array) *</label>
                  <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full border rounded-md px-3 py-2 font-mono text-sm"
                    placeholder='["ingredient1", "ingredient2", ...]'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags (JSON Array)</label>
                  <textarea
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full border rounded-md px-3 py-2 font-mono text-sm"
                    placeholder='["vegan", "gluten-free", ...]'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md border" />
                  )}
                </div>
                <div className="flex gap-2 pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit for Approval"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}