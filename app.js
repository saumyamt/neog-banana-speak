var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#text-input");

function clickHandler(){
    console.log("clicked!");
    console.log("input",txtinput.value);
}

btnTranslate.addEventListener("click",clickHandler)