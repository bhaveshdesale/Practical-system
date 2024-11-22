import UserModel from "../models/user.js";


export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body; 
    const user = await UserModel.findOne({ email });

    if (user && user.role === "Admin") {
      next();
    } else {
      res.status(403).json({ message: "Access Denied: Admins only." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

export const isTeacher = async (req, res, next) => {
  try {
    const { email } = req.body; 
    const user = await UserModel.findOne({ email });

    if (user && (user.role === "Admin" || user.role === "Teachers")) {
      next();
    } else {
      res.status(403).json({ message: "Access Denied: Teachers or Admins only." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

export const isAdminOrTeacher = async (req, res, next) => {
  try {
    const { email } = req.body; 
    const user = await UserModel.findOne({ email });

    if (user && (user.role === "Admin" || user.role === "Teachers")) {
      next();
    } else {
      res.status(403).json({ message: "Access Denied: Admins or Teachers only." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};
