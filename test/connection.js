// const mongoose = require('mongoose');

// //ES6 promise
// mongoose.Promise = global.Promise


// //connect to db before running tests
// before(function(done){

//     //connect to mongocb
//     mongoose.connect('mongodb://localhost/browserTechDB', { useNewUrlParser: true, useUnifiedTopology: true })

//     mongoose.connection.once('open', function(){
//         console.log('Connection has been made')
//         done()
//     }).on('error', function(error){
//         console.log("connection error", error)
//     })
// })

// drop data from db
// beforeEach(function(done){
//     mongoose.connection.collections.shirtmakers.drop(function(){
//         done();
//     })
// })
