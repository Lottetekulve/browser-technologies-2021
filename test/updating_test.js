// const assert = require("assert");
// var expect = require('chai').expect;
// const makeShirt = require("../models/tshirtdata")

// describe('updating shirts', function(){

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
    
//     it("updates a shirt choice in the database", async function(){
        
//         makeShirt.findOneAndUpdate({name: 'cool shirt'}, {name: 'cooler shirt'}).then(function(){
//             makeShirt.findOne({_id: thsirt._id}).then(function(result){
//                 assert(result.name === 'cooler shirt');
//             });
//         });
//     });
// });