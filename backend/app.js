const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const routes = require("./routes");

mongoose
  .connect(process.env.AB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("databse ga ulandi."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`  http://localhost:${PORT} - port da tinglanmoqda.`)
);
