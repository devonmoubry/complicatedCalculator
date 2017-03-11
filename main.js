var equals = document.getElementById('equals');
var clearall = document.querySelector('div #clearAll');
var buttons = document.querySelectorAll('div button');
var calcOutput = document.querySelector('#output-area');


  // display the current click count inside the clicked div
//  event.target.innerHTML = "click count: " + event.detail;
//}, false);

//.textContent
//.outerText
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function pushingKeys(event) {
  calcOutput.textContent = event.target.innerHTML;
  });
}
