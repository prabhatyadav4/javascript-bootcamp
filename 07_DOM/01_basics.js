// ========================================
// DOM Learning - Chai Aur Code
// ========================================

// --- Accessing Elements by ID ---
document.getElementById('title');
document.getElementById('title').id;
document.getElementById('title').className;

// --- getAttribute ---
document.getElementById('title').getAttribute('title');   // null (not set)
document.getElementById('title').getAttribute('id');      // 'title'
document.getElementById('title').getAttribute('class');   // 'heading'

// --- setAttribute ---
document.getElementById('title').setAttribute('class', 'test');
document.getElementById('title').setAttribute('class', 'test heading');

// --- Storing element in a variable ---
const title = document.getElementById('title');

// --- Styling via JS ---
title.style.backgroundColor = "green";
title.style.padding = "16px";
title.style.borderRadius = "16px";

// --- Reading content ---
console.log(title.innerHTML);    // includes hidden span HTML
console.log(title.innerText);    // only visible text
console.log(title.textContent);  // all text including hidden

// ========================================
// querySelector & querySelectorAll
// ========================================

document.querySelector('h2');
document.querySelector('#title');
document.querySelector('.heading');
document.querySelector('input[type="password"]');
document.querySelector('ul');

// --- querySelector on a nested element ---
const myUl = document.querySelector('ul');
myUl.querySelector('li');

const turnGreen = myUl.querySelector('li');
turnGreen.style.backgroundColor = "green";

// --- querySelectorAll returns a NodeList ---
const tempLi = document.querySelectorAll('li');
console.log(tempLi); // NodeList(3) [li, li, li]

tempLi[0].style.backgroundColor = "green";

// --- Iterating NodeList with forEach ---
tempLi.forEach(function (l) {
    l.style.color = "green";
});

// ========================================
// getElementsByClassName + Array.from()
// ========================================

// getElementsByClassName returns an HTMLCollection (not an array)
const tempClassList = document.getElementsByClassName('list-item');

// Convert HTMLCollection to Array to use forEach
const myConvertedClass = Array.from(tempClassList);
console.log(myConvertedClass); // [li.list-item, li.list-item, li.list-item]

myConvertedClass.forEach(function (li) {
    li.style.backgroundColor = "green";
});