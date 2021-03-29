// const assert = require("assert");
// var expect = require('chai').expect;
// const makeShirt = require("../models/tshirtdata");

// const tshirtName = window.querySelector('input[name:"tsname"]'),
//       tshirtColor = window.querySelector('input[name="color"]:checked').value,
//       tshirtText = window.querySelector('input[name:"name"]'),
//       tshirtFont = window.querySelector('input[name="font"]:checked').value,
//       tshirtSize = window.querySelector('input[name="size"]:checked').value,
//       tshirtStyle = window.querySelector('input[name="style"]:checked').value,
//       tshirtColor2 = window.querySelector('input[name="color2"]:checked').value,
//       tshirtFit = window.querySelector('input[name="fit"]:checked').value;
   

// describe('saving shirts', function(){

//     it("saves a choise to the database", function(done){
        
//         let tshirt = new makeShirt({
//             name: tshirtName,
//             text: tshirtText,
//             color: tshirtColor,
//             font: tshirtFont,
//             size: tshirtSize,
//             style: tshirtStyle,
//             colortext: tshirtColor2,
//             fit: tshirtFit
//         });

//         tshirt.save()
//         .then(function(){
//              assert(tshirt.isNew === false);
//              done();
//         })
//     });
// });
