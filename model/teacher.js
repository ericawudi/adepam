// teacher's schema.
// Provides data structure for teachers in mongoose dB
const mongodb = require("mongoose");

const Schema = mongodb.Schema;

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    contact: {
      type: String,
      required: true,
    },
    subject: {
      type: Array,
      required: true,
    },
  },

  { timestamps: true }
);

const Teacher = mongodb.model("Teacher", teacherSchema);

module.exports = Teacher;
