const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.port || 3100;
app.use(express.json());

const loadRoutes = require("./routes/LoaderRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(loadRoutes);
app.use(userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb Connection Successful!"))
  .catch((error) => console.log("Mongodb Connection Error:", error.message));

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});

app.get("/", (req, res) => res.send("Welcome backend Project!"));
