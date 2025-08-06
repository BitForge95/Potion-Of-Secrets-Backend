import { User } from "../models/User.model.js";
import { asyncHandler } from "../utilis/asyncHandler.js";


const addRandomSecret = asyncHandler(async (req, res) => {
  const { randomSecret } = req.body;
  if (!randomSecret) return res.status(400).json({ success: false, message: "Dude Dont be Greedy" });

  const user = await User.create({ randomSecret });
  res.status(201).json({ success: true, data: user });
});

const getASecret = asyncHandler(async (req, res) => {
  const secrets = await User.find({});
  res.status(200).json({ success: true, data: facts });
});

export { addRandomSecret, getASecret };
