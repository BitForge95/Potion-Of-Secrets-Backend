import express from "express";
import cors from "cors";
import { User } from "./models/User.model.js";

const app = express();


app.use(cors());
app.use(express.json());


app.post("/api/secret", async (req, res) => {
  try {
    const { randomSecret } = req.body;

    if (!randomSecret) {
      return res.status(400).json({ error: "Secret is required" });
    }

    const newSecret = await User.create({ randomSecret });
    res.status(201).json({ message: "Secret added", data: newSecret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
})
app.get("/api/secret", async (req, res) => {
  try {
    const secrets = await User.find();

    if (secrets.length === 0) {
      return res.json({ data: [] });
    }

    const randomIndex = Math.floor(Math.random() * secrets.length);
    const randomSecret = secrets[randomIndex].randomSecret;

    res.json({ data: randomSecret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { app };
