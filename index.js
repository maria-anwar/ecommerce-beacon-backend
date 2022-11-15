const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var multer = require('multer');
var upload = multer();

const app = express()
const port = 5000
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.json());

const webRouter = require("./routes/web");

app.use("/", webRouter);
 
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    await mongoose.connect('mongodb+srv://mariahazel:Maria9771%23@cluster0.vb02dxi.mongodb.net/?retryWrites=true&w=majority');
    console.log('database connected successfully !');
    
  } catch (error) {
    console.error('error while connecting database !');
    console.error(error.message);
  }
})