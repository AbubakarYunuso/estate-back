const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({
  estates: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Estate",
    },
  ],
  user: [
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      }
  ],
});

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
