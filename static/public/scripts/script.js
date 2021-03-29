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