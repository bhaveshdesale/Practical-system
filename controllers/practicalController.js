import practicalModel from '../models/practical.js';
import User from '../models/user.js';

export const createPractical = async (req, res) => {
  try {
    const { subjectId, title, description, createdBy } = req.body; 

    
    const user = await User.findById(createdBy);

    if (!user || user.role !== 'Teachers') {
      return res.status(403).json({
        error: 'Only teachers can add practicals.',
      });
    }
    const practicalObj = new practicalModel({
      subjectId,
      title,
      description,
      createdBy,
    });

    const savedPractical = await practicalObj.save();

    
    const PracticalsAdded = await User.findByIdAndUpdate(
      createdBy,
      { $push: { practicals: savedPractical._id } },
      { new: true }
    )
      .populate('practicals')
      .exec();

    return res.json({
      message: 'Practical created successfully.',
      practical: savedPractical,
      PracticalsAdded: PracticalsAdded,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error while creating practicals.',
    });
  }
};


export const getAllPracticals = async (req, res) => {
  try {
    const practicals = await practicalModel
      .find()
      .populate("subjectId", "Subjectname") 
      .populate("createdBy", "name email"); 

    res.json({ practicals });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: "Error while fetching practicals.",
    });
  }
};

