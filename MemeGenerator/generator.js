let form = document.querySelector("#memebuilder");
let img = document.getElementById("imgLink");
let topText = document.getElementsByTagName("topText");
let bottomText = document.getElementsByTagName("bottomText");
const button = document.querySelector("#btn");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newMeme = document.createElement("div");
    const topText = document.createElement("div");
    const bottomText = document.createElement("div");
    const img = document.createElement("img");

    img.src = document.getElementById("imgLink") .value;

    topText.classList.add("topText");
    topText.innerHTML = document.getElementById("topText") .value;

    bottomText.classList.add("bottomText");
    bottomText.innerHTML = getElementById("bottomText") .value;

    newMeme.classList.add("newMeme");
    newMeme.append(topText);
    newMeme.append(bottomText);
    let memeResults = document.getElementById("new-meme");
    memeResults.append(newMeme);

form.reset()
});



