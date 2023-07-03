document.getElementById("container")

document.querySelector("#container");

document.querySelectorAll("li.second");

document.querySelector("ol.third");

const greet = querySelector("#container");
greet.innerText = "Hello!";


//self documenting - I should be abe to understand what it does merely looking at the name
const myFooter = document.querySelector(".footer");
myFooter.classList.add("main");


//
const newList = document.createNewElement("li");
newList.textContent = "four"

const ul = document.querySelector("ul");
ul.append(newList)
