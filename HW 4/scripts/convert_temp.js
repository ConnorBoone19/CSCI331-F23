window.addEventListener("DOMContentLoaded", domLoaded);
let C_value = null
let F_value = null
// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener

   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})
   document.getElementById("convertButton").addEventListener("click",function(){convert()})
   C_in = document.getElementById("C_in")
   F_in = document.getElementById("F_in")
   C_in.addEventListener("input", function(){
      C_value = C_in.value
      F_in.value = "" 
      F_value = null;
   });
   F_in.addEventListener("input",function(){
      F_value = F_in.value;
      C_in.value = ""
      C_value = null;
   })
 }
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)

function convert(){

   // if the c input is empty
   if (C_value == null && F_value == null){
      alert("Enter a temperature to convert,")
      C_value = "";
      F_value = "";
   }else if (C_in.value.length == 0 && F_in.value.length == 0){
      alert("Enter a temperature to convert,")
      C_value = "";
      F_value = ""; 
   }
   else if (C_value == null) {
      convertFtoC(F_value)
   }else if (F_value == null){
      convertCtoF(C_value)
   }
   imgUpdater()
}
function convertCtoF(C) {
   // TODO: Return temp in °F. 
   // °F = °C * 9/5 + 32
   F_out = C * 9/5 + 32
   F_in.value =  F_out
   F_value = F_out 
}

function convertFtoC(F) {
   // TODO: Return temp in °C. 
   // °C = (°F - 32) * 5/9
   C_out = (F - 32) * 5/9
  
   C_in.value = C_out
   C_value = C_out;
}

// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
function imgUpdater(){
   let updateText = document.getElementById("message")
   let imageID = document.getElementById("weatherIcon")
   if (C_in.value.length == 0 && F_in.value.length == 0){
      updateText.innerText = "Enter a temperature to convert,"
      imageID.src = "images/C-F.png" 
   }else if (F_value <= 32 && F_value > -200){
      updateText.innerText = "Cold"
      imageID.src = "images/cold.png"
   }else if (F_value >= 90 && F_value < 200){
      updateText.innerText = "Hot"
      imageID.src = "images/hot.png"
   }else if (F_value >= 200 || F_value <= -200){
      updateText.innerText = "Dead"
      imageID.src = "images/dead.png"
   }else if (F_value > 32 && F_value < 90){
      updateText.innerText = "Cool"
      imageID.src = "images/cool.png"
   }
}