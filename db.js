const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://faiyaz:dulraz@cluster0.tohzp.mongodb.net/urlsortner?retryWrites=true&w=majority")


const urlSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String
  });
  
  const UrlModel = mongoose.model('Url', urlSchema);
  module.exports={connection,UrlModel}