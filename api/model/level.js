const mongodb = require("mongoose");

const Schema = mongodb.Schema;

const levelSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

const Level = mongodb.model("Level", levelSchema);

module.exports = Level;
