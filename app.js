const express = require("express");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const port =  process.env.PORT || 9900;
// setup the middleware
app.use(cors());
app.disable("x-powered-by");
app.use(helmet({contentSecurityPolicy: false}));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// setup the static data
const carData = [
    {CarType: "Bikes", Likes: 679},
	{CarType: "LuxuryCars", Likes: 700},
	{CarType: "SUVs", Likes: 323},
	{CarType: "LowRiders", Likes: 287},
	{CarType: "Trucks", Likes: 207},
	{CarType: "Exotics", Likes: 956},
	{CarType: "Tuners", Likes: 887},
	{CarType: "MuscleCars", Likes: 841},
]
// setup the route
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/cars", (req, res) => {
    res.json(carData);
})
app.listen(port, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log(`The Node.js app server is listening on port ${port}`);
})
