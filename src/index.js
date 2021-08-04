var input = document.querySelector('.input-txt');
var output = document.querySelector('.output-txt');
var button = document.querySelector('.translate-but');

function constructUrl(text){
  return "https://api.funtranslations.com/translate/pirate.json" + "?" +"text=" + text;
}

function errorHandler(error){
  alert("Server went wrong");
}

function fetchUrl(){
  console.log("hello");
  fetch(constructUrl(input.value))
  .then(response => response.json())
  .then(json=>{output.innerHTML=json.contents.translated})
  .catch(errorHandler)
}

button.addEventListener("click",fetchUrl);