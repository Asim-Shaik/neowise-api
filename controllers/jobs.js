import Job from "../models/jobs.js";

export const getJob = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json({ jobs });
  } catch (error) {
    console.log(error.message);
  }
};

export const createJob = async (req, res) => {
  try {
    const jobs = await Job.create(req.body);
    res.status(201).json(jobs);
  } catch (error) {
    console.log(error.message);
  }
};

export const singleJob = async (req, res) => {
  const { id: jobId } = req.params;

  try {
    const jobs = await Job.findOne({ _id: jobId });
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  try {
    const jobs = await Job.findOneAndDelete({ _id: jobId });
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateJob = async (req, res) => {
  const { id: jobId } = req.params;

  try {
    const jobs = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
      new: true,
    });
    res.status(200).json({ jobs });
  } catch (error) {}
};
