import User from "../models/user.js";

export const createAdmin = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Admin",
    });

    const savedUser = await user.save();

    res.status(201).json({ user: savedUser, message: "Admin created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Teachers",
    });

    const savedUser = await user.save();

    res.status(201).json({ user: savedUser, message: "Teacher created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


export const createStudent = async (req, res) => {
  try {
    const { name, email, password ,role} = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Students",
    });

    const savedUser = await user.save();

    res.status(201).json({ user: savedUser, message: "Student created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    return res.status(400).json({
      error: "Error while fetching users.",
    });
  }
};

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "Admin" }); 
    res.json({ admins });
  } catch (error) {
    return res.status(400).json({
      error: "Error while fetching admins.",
    });
  }
};

export const getTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: "Teachers" }); 
    res.json({ teachers });
  } catch (error) {
    return res.status(400).json({
      error: "Error while fetching teachers.",
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "Students" }); 
    res.json({ students });
  } catch (error) {
    return res.status(400).json({
      error: "Error while fetching students.",
    });
  }
};
