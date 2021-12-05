import express from "express";

import {
  getJob,
  createJob,
  singleJob,
  deleteJob,
  updateJob,
} from "../controllers/jobs.js";

const routerJob = express.Router();

routerJob.route("/").get(getJob).post(createJob);
routerJob.route("/:id").get(singleJob).delete(deleteJob).patch(updateJob);

export default routerJob;
