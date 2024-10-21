const mongoose = require("mongoose");
const { string } = require("zod");
const { required, description } = require("./format");
mongoose.connect("mongodb+srv://admin:alokprasad02004@cluster0.uuspnvg.mongodb.net/businessCard")
.then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.log("MongoDB not connected");
})

const businessCardSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String},
    interest: { type: [String]}, 
    linkedin: { type: String},   
    twitter: { type: String}
});

const information =  mongoose.model("information" , businessCardSchema);
module.exports = information;