const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db=>console.log("La BD esta conectada"))
    .catch(err=>console.log(err));