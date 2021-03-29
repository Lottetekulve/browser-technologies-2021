// const { text } = require("body-parser");

const colorRadios = document.querySelectorAll('.colors input')
colorRadios.forEach(radio => {
    radio.addEventListener('change', changeColor)
})


//functie die wordt uitgevoerd wanneer value verandert
function changeColor(event){
    document.querySelector('#shirt').removeAttribute("class");
    document.querySelector('#shirt').classList.add(event.target.value);
}


// css styles voor de tekst

//alle radios
const fontRadios = document.querySelectorAll('.dropdown input')
fontRadios.forEach(radio => {
    radio.addEventListener('change', changeFont)
})

const sizeRadios = document.querySelectorAll('.dropdown2 input')
sizeRadios.forEach(radio => {
    radio.addEventListener('change', changeSize)
})

const styleRadios = document.querySelectorAll('.dropdown3 input')
styleRadios.forEach(radio => {
    radio.addEventListener('change', changeStyles)
})

const color2Radios = document.querySelectorAll('.dropdown4 input')
color2Radios.forEach(radio => {
    radio.addEventListener('change', changeTextcolor)
})



//functie die wordt uitgevoerd wanneer value verandert
function changeFont(event){
    document.querySelector('#screen-name').classList.remove("lobster", "roboto", "quicksand");
    document.querySelector('#screen-name').classList.add(event.target.value);
}

function changeSize(event){
    document.querySelector('#screen-name').classList.remove("smaller", "standaard", "bigger");
    document.querySelector('#screen-name').classList.add(event.target.value);
}

function changeStyles(event){
    document.querySelector('#screen-name').classList.remove("regular", "italic", "bold", "light");
    document.querySelector('#screen-name').classList.add(event.target.value);
}

function changeTextcolor(event){
    document.querySelector('#screen-name').classList.remove("black2", "white2", "blue2", "red2");
    document.querySelector('#screen-name').classList.add(event.target.value);
}

 



// tekst van input naar p
// local storage

const storageInput = document.querySelector('.input')
const textp = document.getElementById('screen-name')
const storageButton = document.querySelector('.storageButton')
const storageButton2 = document.querySelector('.storageButton')
const storedInput = localStorage.getItem('name')

if(storageInput){
    textp.textContent = storedInput
}

storageInput.addEventListener('input', letter => {
    textp.textContent = letter.target.value
}) 

const savetoLS = () => {
    localStorage.setItem('name', textp.textContent)
}

storageButton.addEventListener('click', savetoLS)

// nummer 2
const storageInput2 = document.querySelector('.input2')
const textp2 = document.getElementById('screen-name2')
const storedInput2 = localStorage.getItem('tshirt text')

if(storageInput2){
    textp2.textContent = storedInput2
}

storageInput2.addEventListener('input', letter => {
    textp2.textContent = letter.target.value
}) 

const savetoLS2 = () => {
    localStorage.setItem('tshirt text', textp2.textContent)
}

storageButton.addEventListener('click', savetoLS2)



// // radio buttons opslaan local storage
storageButton.onclick = function () {
    const rbs = document.querySelectorAll('input[name="color"]');
    let SelectedValue;
for (const rb of rbs)  {
    if (rb.checked) {
        SelectedValue = rb.value;
        break;
    }
}
localStorage.setItem('color', SelectedValue)
}

// font
storageButton.onclick = function () {
    const rbs2 = document.querySelectorAll('input[name="font"]');
    let SelectedValue2;
for (const rb2 of rbs2)  {
    if (rb2.checked) {
        SelectedValue2 = rb2.value;
        break;
    }
}
localStorage.setItem('font', SelectedValue2)
}

// size
storageButton.onclick = function () {
    const rbs3 = document.querySelectorAll('input[name="size"]');
    let SelectedValue3;
for (const rb3 of rbs3)  {
    if (rb3.checked) {
        SelectedValue3 = rb3.value;
        break;
    }
}
localStorage.setItem('size', SelectedValue3)
}

// style
storageButton.onclick = function () {
    const rbs4 = document.querySelectorAll('input[name="style"]');
    let SelectedValue4;
for (const rb4 of rbs4)  {
    if (rb4.checked) {
        SelectedValue4 = rb4.value;
        break;
    }
}
localStorage.setItem('style', SelectedValue4)
}

// colortext
storageButton.onclick = function () {
    const rbs5 = document.querySelectorAll('input[name="color2"]');
    let SelectedValue5;
for (const rb5 of rbs5)  {
    if (rb5.checked) {
        SelectedValue5 = rb5.value;
        break;
    }
}
localStorage.setItem('colortext', SelectedValue5)
}

// // fit
storageButton.onclick = function () {
    const rbs6 = document.querySelectorAll('input[name="fit"]');
    let SelectedValue6;
for (const rb6 of rbs6)  {
    if (rb6.checked) {
        SelectedValue6 = rb6.value;
        break;
    }
}
localStorage.setItem('fit', SelectedValue6)
}




