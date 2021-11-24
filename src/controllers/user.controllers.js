/*
*
* File: src/controllers/user.controller.js
* Description: Here is where we define User's REST
* Creation: 11/22/2021
* Author: Chanely marques
*
*/

const User = require('../models/user.model');

exports.registerNewUser = async (req, res) => {
  try {
    const isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res
        .status(409)
        .json({ message: 'E-mail already registered' });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();
    return res
      .status(201)
      .json({ message: 'User Successfully Created!', user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({
        error: 'Login Failed! Check your Credentials!',
      });
    }
    const token = await user.generateAuthToken();
    return res
      .status(201)
      .json({ message: 'Login Successful!', user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};
