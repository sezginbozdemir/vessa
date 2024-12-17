import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/users/create-user", createUser);
router.delete("/users/delete-user/:id", deleteUser);
router.put("/users/update-user/:id", updateUser);
router.get("/users/get", getUsers);

export default router;
