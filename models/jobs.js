import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  openings: {
    type: String,
    trim: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
