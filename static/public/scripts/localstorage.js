// object detection
// source: https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
function localStorageDetection(){
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    } 
}


if(localStorageDetection() === true){
    console.log('localstorage on'); 

    //all inputs
    const formInput = document.querySelectorAll('input');

    formInput.forEach(item => {
        item.addEventListener('change', function addLS(){

            // getting the value from the clicked input
            const key = this.name;
            const value = this.value;
            //putting the name and value of input and putting in localstorage
            localStorage.setItem(`${key}`, `${value}`);
        });
    })


    ///// name of t shirt //////

    let storageInput = document.querySelector('.input')
    let textp = document.getElementById('screen-name')
    let storedInput = localStorage.getItem('name')
    
    if(storageInput){
        textp.textContent = storedInput
        storageInput.addEventListener('input', letter => {
            textp.textContent = letter.target.value
        }) 
    }


    ///// text on shirt////

    const storageInput2 = document.querySelector('.input2')
    const textp2 = document.getElementById('screen-name2')
    const storedInput2 = localStorage.getItem('tsname')

    if(storageInput2){
        textp2.textContent = storedInput2
        storageInput2.addEventListener('input', letter => {
            textp2.textContent = letter.target.value
        }) 
    }


    ///// color of shirt /////

    const shirt = document.querySelector('#shirt');
    const color = localStorage.getItem('color');
    
    if(color === null){
        console.log("geen kleur gekozen")
    }
    else{
        switch (color){
            case 'blue' :
                shirt.style.backgroundColor = "#3f91a5"
                break;

            case 'green' :
                shirt.style.backgroundColor = "#3fa575"
                break;
            
            case 'orange' :
                shirt.style.backgroundColor = "#ddaa58"
                break;

            case 'red' :
                shirt.style.backgroundColor = "#a53f3f"
                break;
            
            case 'white' :
                shirt.style.backgroundColor = "White"
            break;
            
            case 'black' :
                shirt.style.backgroundColor = "Black"
                break;
        }
    }


    //// font of text////

    const font = localStorage.getItem('font')

    if(font === null){
        console.log("geen font gekozen")
    }
    else{
        switch (font){
            case 'lobster' :
                shirt.style.fontFamily = "lobster"
                break;

            case 'roboto' :
                shirt.style.fontFamily = "roboto"
                break;
            
            case 'quicksand' :
                shirt.style.fontFamily = "quicksand"
                break;
        }
    }


    //// size of text ///
    const size = localStorage.getItem('size')

    if(size === null){
        console.log("geen size gekozen")
    }
    else{
        switch (size){
            case 'smaller' :
                textp.style.fontSize = "24px"
                break;

            case 'standaard' :
                textp.style.fontSize = "28px"
                break;
            
            case 'bigger' :
                textp.style.fontSize = "32px"
                break;
        }
    }

    //// styles of text ///
    const styles = localStorage.getItem('style')

    if(styles === null){
        console.log("geen size gekozen")
    }
    else{
        switch (styles){
            case 'regular' :
                textp.style.fontWeight = "normal"
                break;

            case 'italic' :
                textp.style.fontStyle = "italic"
                break;
            
            case 'bold' :
                textp.style.fontWeight = "bold"
                break;

            case 'light' :
                textp.style.fontWeight = "light"
                break;
        }
    }

    //// color of text ////
    const colortext = localStorage.getItem('color2')
    
    if(colortext === null){
        console.log("geen size gekozen")
    }
    else{
        switch (colortext){
            case 'blue2' :
                shirt.style.color = "#3f91a5"
                break;
        
            case 'red2' :
                shirt.style.color = "#a53f3f"
                break;
            
            case 'white2' :
                shirt.style.color = "White"
                break;
            
            case 'black2' :
                shirt.style.color = "Black"
                break;
        }
    }

} else{
    //if browser doesnt support localstorage, nothing happens, 
    // user won't know that enhancement was there in the first place
    //can still do the core functionalities
    console.log('has cookies turned off');
}





