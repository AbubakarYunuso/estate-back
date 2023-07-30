const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  addFavorites: async (req, res) => {
    try {
      const { favorites } = req.body;
      const userId = req.params.id;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "Пользователь не найден" });
      }

      const favoriteIndex = user.favorites.indexOf(favorites);

      if (favoriteIndex !== -1) {
        // Если идентификатор здания уже присутствует в массиве favorites, удаляем его
        user.favorites.splice(favoriteIndex, 1);
      } else {
        // Если идентификатор здания не найден в массиве favorites, добавляем его
        user.favorites.push(favorites);
      }

      await user.save();
      res.json(user.favorites);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json({ error: "Ошибка при  показе всех users" });
    }
  },
  addUser: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
      const hashPassword = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        fullName,
        email,
        password: hashPassword,
        estate: req.params.id,
        favorites: req.params.id,
      });
      res.json(user);
    } catch (error) {
      res.json({ error: "Не удалость зарегистрироваться" });
    }
  },
  deleteUserById: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("Удалено");
    } catch (err) {
      res.json({ error: "Ошибка при удалении user" });
    }
  },
  getOneUser: async (req, res) => {
    try {
      const data = await User.findById(req.user.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const condidate = await User.findOne({ email });
    if (!condidate) {
      return res.status(401).json({ error: "Неверный email или пароль" });
    }
    const valid = await bcrypt.compare(password, condidate.password);
    if (!valid) {
      return res.status(401).json({ error: "Неверный email или пароль" });
    }
    const payload = {
      id: condidate._id,
      email: condidate.email,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });
    res.json({ token });
  },
};
