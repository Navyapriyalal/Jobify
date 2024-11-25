import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import {
  validateJob,
  validateIdParam,
} from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validateJob, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJob, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
