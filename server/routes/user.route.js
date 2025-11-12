import { Router } from "express";
import { getUserById, getMyProfile, registerUser, loginUser, logoutUser, refreshAccessToken, updateUserAvatar, updateUserAccountDetails, changePassword, getAllProductsOfTheCompany, requestVerification, getPendingVerificationRequests, handleVerificationRequest, getVerifiedCompanies, removeCompanyVerification } from "../controllers/user.controller.js";
import { authenticateUser } from "../middlewares/user.auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// protected routes
router.route("/logout").post(authenticateUser, logoutUser);

router.route('/refresh-token').post(refreshAccessToken);

router.route("/update-avatar").patch(
    authenticateUser,
    upload.single("avatar"),
    updateUserAvatar
);

router.route("/update-account").patch(
    authenticateUser, 
    updateUserAccountDetails
)

router.route("/change-password").post(authenticateUser, changePassword);

router.route("/get-all-products").get(authenticateUser, getAllProductsOfTheCompany);

router.route("/profile").get(authenticateUser, getMyProfile);

// Approval routes
router.route("/request-approval").post(authenticateUser, requestVerification);
router.route("/pending-approvals").get(authenticateUser, getPendingVerificationRequests);
router.route("/handle-approval").post(authenticateUser, handleVerificationRequest);
router.route("/approved-companies").get(authenticateUser, getVerifiedCompanies);
router.route("/remove-approval").post(authenticateUser, removeCompanyVerification);

router.route("/:id").get(getUserById)

export default router;