let storedInput = localStorage.getItem('tsname')
document.querySelector(".nameOrder").textContent = "Name: " + storedInput;

const storedInput2 = localStorage.getItem('name')
document.querySelector(".textOrder").textContent = "Text op : " + storedInput2;

const color = localStorage.getItem('color');
document.querySelector(".colorOrder").textContent = "Color shirt: " + color;

const font = localStorage.getItem('font')
document.querySelector(".fontOrder").textContent = "Font: " + font

const size = localStorage.getItem('size')
document.querySelector(".sizeOrder").textContent = "Size: " + size;

const styles = localStorage.getItem('style')
document.querySelector(".styleOrder").textContent = "Styles: " + styles

const colortext = localStorage.getItem('color2')
document.querySelector(".tcolorOrder").textContent = "Text color: " + colortext;

const fit = localStorage.getItem('fit')
document.querySelector(".fitOrder").textContent = "Fit: " + fit;


