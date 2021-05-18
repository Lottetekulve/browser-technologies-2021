const main = document.querySelector("main")
const articleForShirt = document.createElement("article")
const textp = document.createElement("p")
const att = document.createAttribute("id")
const tekstAtt = document.createAttribute("id")
const tekstAtt2 = document.createAttribute("class")
tekstAtt.value = "screen-name";
tekstAtt2.value = "editor-example";
att.value = "shirt";
articleForShirt.setAttributeNode(att);
textp.setAttributeNode(tekstAtt);
textp.setAttributeNode(tekstAtt2);
main.appendChild(articleForShirt)
articleForShirt.appendChild(textp)

//teksten 
const storageInput = document.querySelector('.input')
// const textp = document.getElementById('screen-name')

    if(storageInput){
        storageInput.addEventListener('input', letter => {
            textp.textContent = letter.target.value
        }) 
    }


// nummer 2
const storageInput2 = document.querySelector('.input2')
const textp2 = document.getElementById('screen-name2')

    if(storageInput2){
        storageInput2.addEventListener('input', letter => {
            textp2.textContent = letter.target.value
        }) 
}


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

const colorRadios = document.querySelectorAll('.colors input')
colorRadios.forEach(radio => {
    radio.addEventListener('change', changeColor)
})




// functie die wordt uitgevoerd wanneer value verandert
function changeColor(event){
    const kleur = document.querySelector('#shirt')
    switch (this.value){
        case 'blue' :
            kleur.style.backgroundColor = "#3f91a5"
            break;

        case 'green' :
            kleur.style.backgroundColor = "#3fa575"
            break;
        
        case 'orange' :
            kleur.style.backgroundColor = "#ddaa58"
            break;

        case 'red' :
            kleur.style.backgroundColor = "#a53f3f"
            break;
        
        case 'white' :
            kleur.style.backgroundColor = "White"
            kleur.style.color = "Black"
        break;
        
        case 'black' :
            kleur.style.backgroundColor = "Black"
            kleur.style.color = "White"
            break;
    }
}


function changeFont(event){
    const font = document.querySelector('#shirt')
    switch (this.value){
        case 'lobster' :
            font.style.fontFamily = "lobster"
            break;

        case 'roboto' :
            font.style.fontFamily = "roboto"
            break;
        
        case 'quicksand' :
            font.style.fontFamily = "quicksand"
            break;
    }
}


function changeSize(event){
    const size = document.querySelector('#screen-name')
    switch (this.value){
        case 'smaller' :
            size.style.fontSize = "24px"
            break;

        case 'standaard' :
            size.style.fontSize = "28px"
            break;
        
        case 'bigger' :
            size.style.fontSize = "32px"
            break;
    }
}

function changeStyles(event){
    const styles = document.querySelector('#screen-name')
    switch (this.value){
        case 'regular' :
            styles.style.fontWeight = "normal"
            break;

        case 'italic' :
            styles.style.fontStyle = "italic"
            break;
        
        case 'bold' :
            styles.style.fontWeight = "bold"
            break;

        case 'light' :
            styles.style.fontWeight = "light"
            break;
    }
}


function changeTextcolor(event){
    const textcolor = document.querySelector('#screen-name')
    switch (this.value){
        case 'blue2' :
            textcolor.style.color = "#3f91a5"
            break;
        
        case 'red2' :
            textcolor.style.color = "#a53f3f"
            break;
        
        case 'white2' :
            textcolor.style.color = "White"
            break;
        
        case 'black2' :
            textcolor.style.color = "Black"
            break;
    }
}



 
