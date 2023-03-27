const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://donshres:donshres@cluster0.lbopvpa.mongodb.net/userdb?retryWrites=true&w=majority').on('open',()=>{
    console.log("Mongodb connected");
}).on('error',()=>{
    console.log("mongodb error");
});

module.exports = connection;