const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

//routes
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const port = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json()); //In old version is body-parser.Server can accept json from req.body
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/products", productRoutes);
app.use("/user", userRoutes);
app.use("/orders", orderRoutes);

//errorHandler
app.use(errorHandler);

//mogoose setup
mongoose.set("strictQuery", false);
mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) =>
        app.listen(5000, () => {
            console.log(`db connected and server is live on port: ${port}...`);
        })
    )
    .catch((err) => console.log(err));
