// get all teaches

const Teacher = require("../model/teacher");

const create = (req, res) => {
  const body = req.body;
  const teacher = new Teacher(body);
  teacher
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).json({ msg: "Error processing request" });
      console.log(err);
    });
};

const get = (req, res) => {
  const id = req.params.id;
  Teacher.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "Error processing request" });
    });
};

const getAll = (req, res) => {
  Teacher.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).json({ msg: "Error processing request" });
      console.log(err);
    });
};
const getUser = (req, res) => {
  const name = req.params.name;
  Teacher.find({ name: { $regex: name, $options: "i" } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "Error processing request" });
    });
};

const remove = (req, res) => {
  const id = req.params.id;
  Teacher.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "Error processing request" });
    });
};

const update = (req, res) => {
  const id = req.params.id;
  Teacher.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "Error processing request" });
    });
};

module.exports = {
  create,
  get,
  getUser,
  getAll,
  update,
  remove,
};
