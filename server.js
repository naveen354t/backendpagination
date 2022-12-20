require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnect");
const movieRoutes = require("./routes/Movies");
const app = express();

connectDB();
app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});
