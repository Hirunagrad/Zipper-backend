const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

//access to cors
app.use(
  cors({
    origin: ["http://localhost:3000", "https://note-zipper.netlify.app"], //it acsess frontend port 3000
    credentials: true, //it acsess tokens
  })
);

app.get("/", (req, res) => {
  res.send("Hello api!!");
});

app.get("/api/notes/", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.listen(PORT, () => {
  console.log(`app is running port ${PORT}`);
});

app.use("/api/userms/", userRoutes);

app.use(notFound);
app.use(errorHandler);
