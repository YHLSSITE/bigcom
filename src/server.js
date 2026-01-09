import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/health", (req, res) => {
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
