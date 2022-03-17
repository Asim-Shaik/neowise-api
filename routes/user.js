import express from "express";

import {
  getUser,
  createUser,
  getAllUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const routerUser = express.Router();

routerUser.route("/").get(getAllUser).post(createUser);
routerUser.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);

export default routerUser;
