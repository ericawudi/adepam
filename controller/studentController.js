// edit some details

const Student = require("../model/student");

// view lecture materials/note for a class

const create = (req, res) => {
  const body = req.body;
  const student = new Student(body);
  student
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
  Student.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "Error processing request" });
    });
};

const getAll = (req, res) => {
  Student.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).json({ msg: "Error processing request" });
      console.log(err);
    });
};
const getByName = (req, res) => {
  const name = req.params.name;
  Student.find({ name: { $regex: name, $options: "i" } })
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
  Student.findByIdAndDelete(id)
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
  Student.findByIdAndUpdate(id, req.body, { new: true })
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
  getByName,
  getAll,
  update,
  remove,
};
