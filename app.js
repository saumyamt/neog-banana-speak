var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv =  document.querySelector("#output");

function clickHandler(){
    outputdiv.innerText = "DSDASDDAD" + txtinput.value ;
    
}

btnTranslate.addEventListener("click",clickHandler);