// student's schema.
// Provides data structure for student in mongoose dB
const mongodb = require("mongoose");

const Schema = mongodb.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    gardian: {
      type: String,
      default: "",
    },
    cwa: {
      type: Number,
      default: 0.0,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

const Student = mongodb.model("Student", studentSchema);

module.exports = Student;
