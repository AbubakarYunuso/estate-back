const mongoose = require("mongoose");

const estateSchema = mongoose.Schema({
  image: [],
  address: {
    type: String,
    default: "",
  },
  rooms: {
    type: Number,
    default: 0,
  },
  area: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: "",
  },
  ready: {
    type: String,
    default: "",
  },
  rented: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
    default: "",
  },
});

const Estate = mongoose.model("Estate", estateSchema);

module.exports = Estate;
