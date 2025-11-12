"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function AdminVerificationPage() {
  const router = useRouter();
  const { user, loading, isAuthenticated, login } = useContext(AuthContext);
  
  // Tab state
  const [activeTab, setActiveTab] = useState("company-requests");
  
  // Company states
  const [companyRequests, setCompanyRequests] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [loadingCompanyRequests, setLoadingCompanyRequests] = useState(true);
  const [loadingCompanyList, setLoadingCompanyList] = useState(true);
  
  // Product states
  const [productRequests, setProductRequests] = useState([]);
  const [productList, setProductList] = useState([]);
  const [loadingProductRequests, setLoadingProductRequests] = useState(true);
  const [loadingProductList, setLoadingProductList] = useState(true);
  
  // Messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!loading && (!isAuthenticated || !user || user.role !== "admin")) {
      router.replace("/auth/login?message=Admin access required");
    }
  }, [loading, isAuthenticated, user, router]);

  useEffect(() => {
    if (user?.role === "admin") {
      if (activeTab === "company-requests") {
        loadCompanyRequests();
      } else if (activeTab === "company-list") {
        loadCompanyList();
      } else if (activeTab === "product-requests") {
        loadProductRequests();
      } else if (activeTab === "product-list") {
        loadProductList();
      }
    }
  }, [user, activeTab]);

  // Company Functions
  const loadCompanyRequests = async () => {
    try {
      setLoadingCompanyRequests(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/user/pending-verifications`, {
        method: "GET",
        credentials: "include",
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setCompanyRequests(data?.data?.requests || []);
      } else {
        setError(data?.message || "Failed to load requests");
      }
    } catch (err) {
      setError("Failed to load company requests");
    } finally {
      setLoadingCompanyRequests(false);
    }
  };

  const loadCompanyList = async () => {
    try {
      setLoadingCompanyList(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/user/approved-companies`, {
        method: "GET",
        credentials: "include",
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setCompanyList(data?.data?.companies || []);
      } else {
        setError(data?.message || "Failed to load companies");
      }
    } catch (err) {
      setError("Failed to load company list");
    } finally {
      setLoadingCompanyList(false);
    }
  };

  const handleCompanyApproval = async (companyId, action) => {
    try {
      setError("");
      setSuccess("");
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/user/handle-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ companyId, action }),
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setSuccess(action === "approve" ? "Company verified successfully" : "Verification request denied");
        await loadCompanyRequests();
        if (action === "approve") {
          await loadCompanyList();
        }
      } else {
        setError(data?.message || `Failed to ${action} verification`);
      }
    } catch (err) {
      setError(`Failed to ${action} verification request`);
    }
  };

  const handleRemoveCompany = async (companyId) => {
    if (!confirm("Are you sure you want to remove this company's verification?")) return;
    
    try {
      setError("");
      setSuccess("");
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/user/remove-approval`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ companyId }),
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setSuccess("Company verification removed successfully");
        await loadCompanyList();
      } else {
        setError(data?.message || "Failed to remove verification");
      }
    } catch (err) {
      setError("Failed to remove company verification");
    }
  };

  // Product Functions
  const loadProductRequests = async () => {
    try {
      setLoadingProductRequests(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/product/pending-approvals`, {
        method: "GET",
        credentials: "include",
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setProductRequests(data?.data?.products || []);
      } else {
        setError(data?.message || "Failed to load product requests");
      }
    } catch (err) {
      setError("Failed to load product requests");
    } finally {
      setLoadingProductRequests(false);
    }
  };

  const loadProductList = async () => {
    try {
      setLoadingProductList(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/product/approved-products`, {
        method: "GET",
        credentials: "include",
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setProductList(data?.data?.products || []);
      } else {
        setError(data?.message || "Failed to load products");
      }
    } catch (err) {
      setError("Failed to load product list");
    } finally {
      setLoadingProductList(false);
    }
  };

  const handleProductApproval = async (productId, action) => {
    try {
      setError("");
      setSuccess("");
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/product/handle-approval`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ productId, action }),
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setSuccess(action === "approve" ? "Product approved successfully" : "Product approval denied");
        await loadProductRequests();
        if (action === "approve") {
          await loadProductList();
        }
      } else {
        setError(data?.message || `Failed to ${action} product`);
      }
    } catch (err) {
      setError(`Failed to ${action} product approval`);
    }
  };

  const handleRemoveProduct = async (productId) => {
    if (!confirm("Are you sure you want to remove this product?")) return;
    
    try {
      setError("");
      setSuccess("");
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const resp = await fetch(`${apiUrl}/product/remove-approval`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ productId }),
      });
      const data = await resp.json();
      if (resp.ok && data?.success) {
        setSuccess("Product removed successfully");
        await loadProductList();
      } else {
        setError(data?.message || "Failed to remove product");
      }
    } catch (err) {
      setError("Failed to remove product");
    }
  };

  if (!loading && (!isAuthenticated || !user || user.role !== "admin")) {
    return null;
  }

  const tabs = [
    { id: "company-requests", label: "Company Requests" },
    { id: "company-list", label: "Company List" },
    { id: "product-requests", label: "Product Requests" },
    { id: "product-list", label: "Product List" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 md:ml-48">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Verification</h1>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Messages */}
        {(error || success) && (
          <div className="mb-4">
            {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{error}</div>}
            {success && <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">{success}</div>}
          </div>
        )}

        {/* Company Requests Tab */}
        {activeTab === "company-requests" && (
          <>
            {loadingCompanyRequests ? (
              <div className="text-center py-12">
                <div className="text-gray-500">Loading company requests...</div>
              </div>
            ) : companyRequests.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="text-gray-500 text-lg">No pending company verification requests</div>
              </div>
            ) : (
              <div className="space-y-4">
                {companyRequests.map((company) => (
                  <div key={company._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <img
                          src={company.avatar || "/images/nutrilens_logo.png"}
                          alt={company.fullName}
                          className="w-16 h-16 rounded-full object-cover border"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {company.fullName || company.username}
                            </h3>
                            <span className="text-sm text-gray-500">@{company.username}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <div className="text-sm text-gray-500">Email</div>
                              <div className="text-gray-900">{company.email || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Mobile</div>
                              <div className="text-gray-900">{company.mobile || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Company Registration No</div>
                              <div className="text-gray-900">{company.companyRegistrationNo || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">GST No</div>
                              <div className="text-gray-900">{company.gstNo || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Address</div>
                              <div className="text-gray-900">{company.address || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Country</div>
                              <div className="text-gray-900">{company.country || "—"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleCompanyApproval(company._id, "approve")}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleCompanyApproval(company._id, "deny")}
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                          Deny
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Company List Tab */}
        {activeTab === "company-list" && (
          <>
            {loadingCompanyList ? (
              <div className="text-center py-12">
                <div className="text-gray-500">Loading verified companies...</div>
              </div>
            ) : companyList.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="text-gray-500 text-lg">No verified companies</div>
              </div>
            ) : (
              <div className="space-y-4">
                {companyList.map((company) => (
                  <div key={company._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <img
                          src={company.avatar || "/images/nutrilens_logo.png"}
                          alt={company.fullName}
                          className="w-16 h-16 rounded-full object-cover border"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {company.fullName || company.username}
                            </h3>
                            <span className="text-sm text-gray-500">@{company.username}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <div className="text-sm text-gray-500">Email</div>
                              <div className="text-gray-900">{company.email || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Mobile</div>
                              <div className="text-gray-900">{company.mobile || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Company Registration No</div>
                              <div className="text-gray-900">{company.companyRegistrationNo || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">GST No</div>
                              <div className="text-gray-900">{company.gstNo || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Address</div>
                              <div className="text-gray-900">{company.address || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Country</div>
                              <div className="text-gray-900">{company.country || "—"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handleRemoveCompany(company._id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Product Requests Tab */}
        {activeTab === "product-requests" && (
          <>
            {loadingProductRequests ? (
              <div className="text-center py-12">
                <div className="text-gray-500">Loading product requests...</div>
              </div>
            ) : productRequests.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="text-gray-500 text-lg">No pending product approval requests</div>
              </div>
            ) : (
              <div className="space-y-4">
                {productRequests.map((product) => (
                  <div key={product._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <img
                          src={product.productImage || "/images/nutrilens_logo.png"}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-md border"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                            <span className="text-sm text-gray-500">ID: {product.productId}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <div className="text-sm text-gray-500">Category</div>
                              <div className="text-gray-900 capitalize">{product.category || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Price</div>
                              <div className="text-gray-900">₹{product.price || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Company</div>
                              <div className="text-gray-900">
                                {product.companyId?.fullName || product.companyId?.username || "—"}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Description</div>
                              <div className="text-gray-900 line-clamp-2">{product.description || "—"}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Manufacturing Date</div>
                              <div className="text-gray-900">
                                {product.manufacturingDate ? new Date(product.manufacturingDate).toLocaleDateString() : "—"}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Expiry Date</div>
                              <div className="text-gray-900">
                                {product.expiryDate ? new Date(product.expiryDate).toLocaleDateString() : "—"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleProductApproval(product._id, "approve")}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleProductApproval(product._id, "deny")}
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                          Deny
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Product List Tab */}
        {activeTab === "product-list" && (
          <>
            {loadingProductList ? (
              <div className="text-center py-12">
                <div className="text-gray-500">Loading approved products...</div>
              </div>
            ) : productList.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="text-gray-500 text-lg">No approved products</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productList.map((product) => (
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
                        <div className="text-xs text-gray-500 mt-1">
                          By: {product.companyId?.fullName || product.companyId?.username || "—"}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveProduct(product._id)}
                      className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}