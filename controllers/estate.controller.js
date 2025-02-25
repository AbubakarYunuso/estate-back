const Estate = require("../models/Estate.model");
module.exports.estateController = {
  getEstates: async (req, res) => {
    try {
      const estates = await Estate.find({});
      res.json(estates);
    } catch (error) {
      res.json(error + "Ошибка в получении всей продукции");
    }
  },

  getEstatesById: async (req, res) => {
    const { id } = req.params;
    try {
      const estate = await Estate.findById(id);
      res.json(estate);
    } catch (error) {
      res.json(error + "Ошибка в получении по ID");
    }
  },

  postEstate: async (req, res) => {
   const { address, rooms, area,price, type, ready, rented, desc, objectId  } = req.body
    try {
      const estate = await Estate.create({
        image:req.file.path,
        address,
        rooms,
        area,
        price,
        type,
        ready,
        rented,
        desc,
        objectId,

      })
      res.json(estate);
    } catch (error) {
      res.json(error.message)
    }
  },

  patchEstate: async(req, res)=>{
    const { address, rooms, area,price, type, ready, rented, desc, objectId  } = req.body
    try {
        const estate = await Estate.findByIdAndUpdate(
            req.params.id,
            {
                image:req.file.path,
                address,
                rooms,
                area,
                price,
                type,
                ready,
                rented,
                desc,
                objectId

            },
          {new:true}
        )
        res.json(estate)
    } catch (error) {
        res.json(error)
    }
  },

  deleteEstate: async (req, res)=>{
    const {id}= req.params
    try {
        Estate.findByIdAndDelete(id)
        res.json('Удалено')
    } catch (error) {
        res.json(error)
    }
  }
};
