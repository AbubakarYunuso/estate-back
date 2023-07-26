const Basket = require("../models/Basket.model");

module.exports.basketController = {
  createBasket: async (req, res) => {
    try {
      const data = await Basket.create({
        user: req.params.id,
      });
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getBasket: async (req, res) => {
    try {
      const data = await Basket.findById(req.params.id).populate("estates");
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  addToBasket: async (req, res) => {
    try {
      const data = await Basket.findByIdAndUpdate(
        req.params.id,
        {
          $addToSet: { basket: req.body.basket },
        },
        { new: true }
      ).populate("estates");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  deleteInBasket: async (req, res) => {
    try {
      const data = await Basket.findByIdAndUpdate(req.params.id, {
        $pull: { products: req.body.products },
      }).populate("estates");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
