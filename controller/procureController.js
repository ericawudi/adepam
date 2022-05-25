const Procure = require("../model/procure");

const create = (req, res) => {
  const body = req.body;
  const procure = new Procure(body);
  procure
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
  Procure.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "Error processing request" });
    });
};

const getAll = (req, res) => {
  Procure.find()
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
  Procure.find({ name: { $regex: name, $options: "i" } })
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
  Procure.findByIdAndDelete(id)
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
  Procure.findByIdAndUpdate(id, req.body, { new: true })
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
