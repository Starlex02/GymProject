import express from "express";
import route from "./routes/index.js";
import bodyParser from "body-parser";
import multer from "multer";
import session from "express-session";

const app = express();
const upload = multer();

app.set("view engine", "pug");
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(upload.array());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static("public"));
app.use(route);

app.listen(3000, () => console.log("Server is running http://localhost:3000"));