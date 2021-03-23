// css styles voor de kleur van het shirt


//alle radios
const colorRadios = document.querySelectorAll('.colors input')
//eventlistener wanneer radio value verandert
colorRadios.forEach(radio => {
    radio.addEventListener('change', changeColor)
})
//functie die wordt uitgevoerd wanneer value verandert
function changeColor(event){
    document.querySelector('#shirt').removeAttribute("class");
    document.querySelector('#shirt').classList.add(event.target.value);
}

// tekst van input naar p

document.getElementById('apply').addEventListener('click', function() {
    document.getElementById('screen-name').innerHTML = document.getElementById('nameID').value.trim()
})


// css styles voor de tekst

//alle radios
const fontRadios = document.querySelectorAll('.dropdown-content input')
//eventlistener wanneer radio value verandert
fontRadios.forEach(radio => {
    radio.addEventListener('change', changeFont)
})
//functie die wordt uitgevoerd wanneer value verandert
function changeFont(event){
    document.querySelector('#screen-name').removeAttribute("class");
    document.querySelector('#screen-name').classList.add(event.target.value);
}





