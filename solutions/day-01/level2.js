import {webTechs} from "./web_techs.js";
import {countries} from "./countries.js";

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

//2.
text = text.replace(/\.|,/g, "");
const words = text.split(' ');
console.log(words);
const wordsCount = words.length;
console.log(wordsCount);
//3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
//4.
if(countries.includes('Ethiopia')){
    console.log(
        ((countries.slice(countries.indexOf('Ethiopia'), 
                        countries.indexOf('Ethiopia')+1)).join("")).toUpperCase()
    );
} else {
    countries.push('Ethiopia');
}
//5.
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}
//6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);