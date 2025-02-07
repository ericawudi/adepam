const mongodb = require("mongoose");

const Schema = mongodb.Schema;

const procureSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    condition: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
  },

  { timestamps: true }
);

const Procure = mongodb.model("Procure", procureSchema);

module.exports = Procure;
