console.log("hello");

var inputvalue = document.getElementById('inputfield');
var submit = document.getElementById('submit');
var value = document.querySelector('.value');

submit.addEventListener('click', () => {
  var inputValue = inputvalue.value; // 
  var textNode = inputValue
  value.textContent = textNode 
});
