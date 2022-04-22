const dotenv = require("dotenv");
const GuessYourGesture = require("./src/app.js");

dotenv.config();

const app = new GuessYourGesture();
app.launch();