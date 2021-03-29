// const assert = require("assert");
// var expect = require('chai').expect;
// const makeShirt = require("../models/tshirtdata")

// describe('finding shirts', function(){

//     var tshirt;

//     beforeEach(function(done){

//         tshirt = new makeShirt({
//             name: 'cool shirt',
//             text: 'cool shirt',
//             color: "",
//             font: "",
//             style: "",
//             size: "",
//             colortext: "",
//             fit: ""
//         })

//         tshirt.save()
//         .then(function(){
//              done();
//         })
//     })

//     //finds a shirt choice, finds name === cool shirt now.
    
//     it("finds a shirt choice in the database", function(done){
        
//         makeShirt.findOne({name: 'cool shirt'}).then(function(result){
//             assert(result.name === 'cool shirt');
//             done();
//         })
        
//     });

//     //finds shirt choices by id

//     it("finds a shirt choice in the database", function(done){
        
//         makeShirt.findOne({_id: tshirt._id}).then(function(result){
//             assert(result._id.toString()  === tshirt._id.toString());
//             done();
//         })
        
//     });
// });

  