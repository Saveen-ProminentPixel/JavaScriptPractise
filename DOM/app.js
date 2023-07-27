// const h1 = document.getElementById("main-title");

// h1.textContent = "Some Random Title!!";
// h1.style.color = "blue";
// h1.style.backgroundColor = "cyan";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + "(changed!)";

// const body = document.body;


// const listItemElements = document.querySelectorAll("li");
// // const listItemElements = document.getElementsByTagName("li");

// for(const listItem of listItemElements){
//     console.dir(listItem);
// }


// const list = document.querySelector('li');
// list.parentElement;

// list.closest('body');

const ul = document.body.firstElementChild.nextElementSibling;
const firstList = ul.firstElementChild;

console.log(firstList);

// const a = document.querySelector("#main-title");
// console.log(a);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = "blue";
section.className = "red-bg";
// button.addEventListener('click', () => {
//     if(section.className === "red-bg visible"){
//         section.className = "red-bg invisible";
//     }else{
//         section.className = "red-bg visible";
//     }
// });

button.addEventListener("click", () => {
    // section.classList.toggle("visible");
    section.classList.toggle("invisible");
});

// section.innerHTML = "<button> A new Title!!!!</button>";

// inserting HTML element withoud changing the old elements
section.insertAdjacentHTML("beforebegin", "<p> Hello there!! I am an inserted HTML element before begin</p>");
section.insertAdjacentHTML("afterbegin", "<p> Hello there!! I am an inserted HTML element after begin</p>");
section.insertAdjacentHTML("beforeend", "<p> Hello there!! I am an inserted HTML element before end</p>");
section.insertAdjacentHTML("afterend", "<p> Hello there!! I am an inserted HTML element after end</p>");

const list = document.querySelector('ul');
console.log(list);
console.log("-------------");

const newLi = document.createElement("li");
console.log(newLi);
console.log("-------------");

list.append(newLi);
console.log(list);
console.log("-------------");

newLi.textContent = "Item 4";
console.log(list);
console.log("-------------");

// newLi.textContent = "Item 5";
// console.log(list);
// console.log("-------------");
list.appendChild(newLi);

list.prepend(newLi);

list.lastElementChild.before(newLi);
list.firstElementChild.after(newLi);
// list.firstElementChild.replaceWith(newLi);

const secondLi = list.children[2];

secondLi.insertAdjacentElement("afterend", newLi);


//cloning DOM 
const newLi2 = newLi.cloneNode(true);

list.append(newLi, newLi2);


//Live node and Static Node Lists
const listItems = list.querySelectorAll('li');
console.log(listItems);
const listItems2 = list.getElementsByTagName("li");
console.log(listItems2);

const newLi3 = document.createElement('li');
newLi3.textContent = "Item 6";
list.append(newLi3);

console.log(listItems);
console.log("------------")
console.log(listItems2);


//Delete an element
// list.remove();
newLi3.remove();

const listItem1 = document.querySelector('li');
console.log(listItem1);

const itemList = document.querySelector('ul');
console.log(itemList);

console.log(itemList.children[2]);

// const anon = () => {
//     console.log("Anonymous function");
// };

// anon();