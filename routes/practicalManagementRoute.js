import express from "express";
import {
  createAdmin,
  createStudent,
  createTeacher,
  getAllUsers,
  getStudents,
  getTeachers,
  getAdmins,
} from "../controllers/userController.js";
import {
  createSubject,
  getAllSubjects,
} from "../controllers/subjectController.js";
import {
  createPractical,
  getAllPracticals,
} from "../controllers/practicalController.js";
import { isAdmin, isTeacher, isAdminOrTeacher } from "../middleware/Middleware.js"

const router = express.Router();

router.post("/admin/create", createAdmin); 
router.post("/teachers/create", createTeacher); 
router.post("/students/create", createStudent); 
router.get("/users/get",  getAllUsers);
router.get("/admins/get", getAdmins); 
router.get("/teachers/get",  getTeachers); 
router.get("/students/get", getStudents); 

router.post("/subject/create", createSubject); 
router.get("/subjects/get",  getAllSubjects); 

router.post("/practicals/create", createPractical); 
router.get("/practicals/get", getAllPracticals);

export default router;





//Logic for middleware but it cant execute properly
// import express from "express";
// import {
//   createAdmin,
//   createStudent,
//   createTeacher,
//   getAllUsers,
//   getStudents,
//   getTeachers,
//   getAdmins,
// } from "../controllers/userController.js";
// import {
//   createSubject,
//   getAllSubjects,
// } from "../controllers/subjectController.js";
// import {
//   createPractical,
//   getAllPracticals,
// } from "../controllers/practicalController.js";
// import { isAdmin, isTeacher, isAdminOrTeacher } from "../middleware/Middleware.js";

// const router = express.Router();

// // User-related routes
// router.post("/admin/create", isAdmin, createAdmin); // Only Admin can create Admins
// router.post("/teachers/create", isAdmin, createTeacher); // Only Admin can create Teachers
// router.post("/students/create", isAdmin, createStudent); // Only Admin can create Students
// router.get("/users/get", isAdmin, getAllUsers); // Only Admin can get all users
// router.get("/admins/get", isAdmin, getAdmins); // Only Admin can get Admins
// router.get("/teachers/get", isAdmin, getTeachers); // Only Admin can get Teachers
// router.get("/students/get", isAdminOrTeacher, getStudents); // Admin or Teachers can get Students

// // Subject-related routes
// router.post("/subject/create", isAdmin, createSubject); // Only Admin can create Subjects
// router.get("/subjects/get", isAdmin, getAllSubjects); // Only Admin can get Subjects

// // Practical-related routes
// router.post("/practicals/create", isTeacher, createPractical); // Only Teachers can create Practicals
// router.get("/practicals/get", isAdminOrTeacher, getAllPracticals); // Admin or Teachers can get Practicals

// export default router;
