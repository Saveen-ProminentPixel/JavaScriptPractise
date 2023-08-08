// make div inside div in html and get the distance of parent div 
// from top by using element of child div(inside div)  after that 
// make one scrollable box (with help of css) and  add one <p>  
// also perform scrollTo and scrollBy on that p tag 


const parentDiv = document.getElementById("parent-div");
const childDiv = document.getElementById("child-div");
const distance = childDiv.offsetTop;

console.log(distance);
// const rect = childDiv.getBoundingClientRect();
// const distanceFromTop = rect.top + window.pageYOffset;

// console.log("Distance of parentDiv from top:", distanceFromTop);

const scrollable = document.querySelector(".scrollable-box");

scrollable.scrollTo(0, 50);

scrollable.scrollBy(0, 50);

const pTag = document.createElement("p");

pTag.textContent = "I left college laboratory, went to the park in front of college and sat on the bench";

pTag.setAttribute("data-class-info", "random-class");

const body = document.body;
body.append(pTag);