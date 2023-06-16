require("dotenv").config();
const express = require("express");
const app = express();

//connectDB
const connectDB = require("./dbConnect");

//routers
const newsRoute = require("./routes/newsRoute");
const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/api/newsitems/", newsRoute);
app.use("/api/users/", userRoute);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening at port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
