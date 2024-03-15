const mongoose = require("mongoose");
const mongoURI = "mongodb://0.0.0.0:27017/data";

mongoose.set("strictQuery", true);


const mongoDB = async () => {
  try{
    await mongoose.connect(mongoURI)
    console.log('connected successfully')
  }catch(err){
    console.log(err)
  }
};



module.exports = mongoDB;

