const mongoose = require("mongoose");

const url ="mongodb+srv://Aritra1:hello123@cluster0.tube2ru.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };