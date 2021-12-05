import Service from "../models/services.js";

export const getService = async (req, res) => {
  try {
    const services = await Service.find({});
    res.status(200).json({ services });
  } catch (error) {
    console.log(error.message);
  }
};

export const createService = async (req, res) => {
  try {
    const services = await Service.create(req.body);
    res.status(201).json(services);
  } catch (error) {
    console.log(error.message);
  }
};

export const singleService = async (req, res) => {
  const { id: serviceId } = req.params;

  try {
    const service = await Service.findOne({ _id: serviceId });
    res.status(200).json(service);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteService = async (req, res) => {
  const { id: serviceId } = req.params;

  try {
    const service = await Service.findOneAndDelete({ _id: serviceId });
    res.status(200).json(service);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateService = async (req, res) => {
  const { id: serviceId } = req.params;

  try {
    const service = await Service.findOneAndUpdate(
      { _id: serviceId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ service });
  } catch (error) {}
};
