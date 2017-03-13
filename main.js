var equals = document.getElementById('equals');
var clearall = document.querySelector('div #clearAll');
var buttons = document.querySelectorAll('div button');
var calcOutput = document.querySelector('#output-area');
var displayScreen = calcOutput.textContent;

clickCount = 0;

for (var i = 0; i < buttons.length; i++) {

    if (buttons[i] === clearall) {

        clearall.addEventListener("click", function clearTheDecks() {
            calcOutput.textContent = '';
            clickCount = 0;

        })

    } else if (buttons[i] === equals) {

        equals.addEventListener("click", function calcEquals(event) {

            if (calcOutput.textContent.indexOf("+") !== -1) {

                var opIndex = calcOutput.textContent.indexOf("+");
                var a = calcOutput.textContent.substring(0, opIndex);
                var b = calcOutput.textContent.substring(opIndex + 1);
                calcOutput.textContent = parseInt(a) + parseInt(b);

            } else if (calcOutput.textContent.indexOf("-") !== -1) {

                var opIndex = calcOutput.textContent.indexOf("-");
                var a = calcOutput.textContent.substring(0, opIndex);
                var b = calcOutput.textContent.substring(opIndex + 1);
                calcOutput.textContent = parseInt(a) - parseInt(b);

            } else if (calcOutput.textContent.indexOf("*") !== -1) {

                var opIndex = calcOutput.textContent.indexOf("*");
                var a = calcOutput.textContent.substring(0, opIndex);
                var b = calcOutput.textContent.substring(opIndex + 1);
                calcOutput.textContent = parseInt(a) * parseInt(b);

            } else if (calcOutput.textContent.indexOf("/") !== -1) {

                var opIndex = calcOutput.textContent.indexOf("/");
                var a = calcOutput.textContent.substring(0, opIndex);
                var b = calcOutput.textContent.substring(opIndex + 1);
                calcOutput.textContent = parseInt(a) / parseInt(b);

            } else {

                alert('Error! This is awkward. Please try again.');

            }

        });

    } else {

        buttons[i].addEventListener("click", function pushingKeys(event) {

            calcOutput.textContent += event.target.innerHTML;

            clickCount++;

            if (calcOutput.textContent.length > 8 || clickCount > 8) {

                alert('You’re mathing too hard for me. Please see Dieter Rams.');
            }

        });

    }

}
