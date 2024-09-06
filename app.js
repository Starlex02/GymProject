import express from "express";
import route from "./routes/index.js";

const app = express();

app.set("view engine", "pug");
app.set('views', './views');

app.use(express.static("public"));
app.use(route);

app.listen(3000, () => console.log("Server is running http://localhost:3000"));