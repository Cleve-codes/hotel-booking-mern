import { Request, Response, NextFunction, response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response, next: NextFunction ) => {
  try {
    // 1. Check if user exists
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      res.status(200).send();
    } else {
      // 2. Create user if they don't exist
      const newUser = new User(req.body);
      await newUser.save();

      // 3. Return the user object to the calling client
      res.status(201).json(newUser.toObject());
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
    next(error);
  }
};

const updateCurrentUser = async(req: Request, res: Response, next: NextFunction) =>  {
  try {

    const { name, addressLine1, city, country } = req.body;
    const user = await User.findById(req.userId)

    if(!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    await user.save()

    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({message : "Error updating user"})
  }
}

export default {
  createCurrentUser,
  updateCurrentUser
};