import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middlewares/validationMiddleware.js";
import { authorizePermissions } from "../middlewares/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
