import userModel from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //  check existing user

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      res.status(200).send({
        message: "User already exist",
        success: false,
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(200).send({
      message: "Sign up successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while signup",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //  check user

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "user not found ",
        success: false,
      });
    }

    // match the password

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(200).send({
        message: "Incorrect Password",
        success: false,
      });
    }

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn : "7d",
    });


    res.status(200).send({
      message: "login Successfully",
      success: true,
      user: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      token
    });
  } catch (error) {
    res.status(500).send({
      message: "error while login",
      success: false,
      error,
    });
  }
};
