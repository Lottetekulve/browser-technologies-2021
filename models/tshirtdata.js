const MongoClient = require('mongoose');
const Schema = mongoose.Schema; 

//create schema and model

const shirtSchema = new Schema({
    name: {type:String, trim:true, default: ""},
    text: {type:String, trim:true, default: ""},
    color: {type:String, default: ""},
    font: {type:String, default: ""},
    style: {type:String, default: ""},
    size: {type:String, default: ""},
    colortext: {type:String, default: ""},
    fit: {type:String, default: ""}
});

const makeShirt = MongoClient.model("shirtmaker", shirtSchema);

module.exports = makeShirt;