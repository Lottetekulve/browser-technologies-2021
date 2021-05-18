let storedInput = localStorage.getItem('name')
document.querySelector(".nameIndex").innerHTML = "Name: " + storedInput;

const storedInput2 = localStorage.getItem('tsname')
document.querySelector(".textIndex").innerHTML = "Text: " + storedInput2;

const color = localStorage.getItem('color');
document.querySelector(".colorIndex").textContent = "Color shirt: " + color;

const font = localStorage.getItem('font')
document.querySelector(".fontIndex").innerHTML = "Font: " + font

const size = localStorage.getItem('size')
document.querySelector(".sizeIndex").innerHTML = "Size: " + size;

const styles = localStorage.getItem('style')
document.querySelector(".styleIndex").innerHTML = "Styles: " + styles


const colortext = localStorage.getItem('color2')
document.querySelector(".tcolorIndex").innerHTML = "Text color: " + colortext;


const fit = localStorage.getItem('fit')
document.querySelector(".fitIndex").innerHTML = "Fit: " + fit;