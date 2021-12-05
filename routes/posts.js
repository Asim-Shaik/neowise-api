import express from "express";

const router = express.Router();
import {
  getService,
  createService,
  singleService,
  deleteService,
  updateService,
} from "../controllers/posts.js";

router.route("/").get(getService).post(createService);
router
  .route("/:id")
  .get(singleService)
  .delete(deleteService)
  .patch(updateService);

export default router;
