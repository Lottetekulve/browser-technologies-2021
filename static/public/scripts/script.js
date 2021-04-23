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
const storedInput = localStorage.getItem('text')

if(storageInput){
    textp.textContent = storedInput
    storageInput.addEventListener('input', letter => {
        textp.textContent = letter.target.value
    }) 
}



const savetoLS = () => {
    localStorage.setItem('text', textp.textContent)
}

if(storageButton){
    storageButton.addEventListener('click', savetoLS)
}

// nummer 2
const storageInput2 = document.querySelector('.input2')
const textp2 = document.getElementById('screen-name2')
const storedInput2 = localStorage.getItem('name')

if(storageInput2){
    textp2.textContent = storedInput2
    storageInput2.addEventListener('input', letter => {
        textp2.textContent = letter.target.value
    }) 
}

const savetoLS2 = () => {
    localStorage.setItem('name', textp2.textContent)
}

if(storageButton){
    storageButton.addEventListener('click', savetoLS2)
}

//color

storageButton.addEventListener('click', () => {
    const rbs = document.querySelectorAll('input[name="color"]');
    let selectedValue;
for (const rb of rbs)  {
    if (rb.checked) {
        selectedValue = rb.value;
        break;
    }
}
console.log('set color')
localStorage.setItem('color', selectedValue)
})

// font
storageButton.addEventListener('click', () => {
    const rbs2 = document.querySelectorAll('input[name="font"]');
    let selectedValue2;
for (const rb2 of rbs2)  {
    if (rb2.checked) {
        selectedValue2 = rb2.value;
        break;
    }
}
console.log('set font')
localStorage.setItem('font', selectedValue2)
})

// size
storageButton.addEventListener('click', () => {
    const rbs3 = document.querySelectorAll('input[name="size"]');
    let selectedValue3;
for (const rb3 of rbs3)  {
    if (rb3.checked) {
        selectedValue3 = rb3.value;
        break;
    }
}
console.log(selectedValue3)
localStorage.setItem('size', selectedValue3)
})

// style
storageButton.addEventListener('click', () => {
    const rbs4 = document.querySelectorAll('input[name="style"]');
    let selectedValue4;
for (const rb4 of rbs4)  {
    if (rb4.checked) {
        selectedValue4 = rb4.value;
        break;
    }
}
localStorage.setItem('style', selectedValue4)
})

// colortext
storageButton.addEventListener('click', () => {
    const rbs5 = document.querySelectorAll('input[name="color2"]');
    let selectedValue5;
for (const rb5 of rbs5)  {
    if (rb5.checked) {
        selectedValue5 = rb5.value;
        break;
    }
}
localStorage.setItem('colortext', selectedValue5)
})

// // fit
storageButton.addEventListener('click', () => {
    const rbs6 = document.querySelectorAll('input[name="fit"]');
    let selectedValue6;
for (const rb6 of rbs6)  {
    if (rb6.checked) {
        selectedValue6 = rb6.value;
        break;
    }
}
localStorage.setItem('fit', selectedValue6)
})










