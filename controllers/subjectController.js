
import subjectModel from "../models/subject.js";
import User from "../models/user.js";


export const createSubject = async (req, res) => {
  try {
    const { Subjectname, code, createdBy } = req.body;

    const user = await User.findById(createdBy);

    if (!user || user.role !== "Admin") {
      return res.status(403).json({
        error: "Only admins can add subjects.",
      });
    }

    const subjectObj = new subjectModel({
      Subjectname,
      code,
      createdBy,
    });

    const savedSubject = await subjectObj.save();

    const updatedUser = await User.findByIdAndUpdate(
      createdBy,
      { $push: { subjects: savedSubject._id } },
      { new: true }
    )
      .populate("subjects") 
      .exec();

    return res.json({
      message: "Subject created successfully.",
      subject: savedSubject,
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Error while creating the subject.",
    });
  }
};

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await subjectModel.find();
    res.json({ subjects });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: "Error while fetching subjects.",
    });
  }
};
