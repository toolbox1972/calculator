
// Todo:
// Solve that when dividing with zero it shows "infinity".

/**
 * References:
 https://codepen.io/joshLongmire3/pen/RRGWmd
 Eval takes in a string and outputs that strings operations as a number.
 eval("3 + 2") sends back 5.

Event listener
 https://stackoverflow.com/questions/16089421/simplest-way-to-detect-keypresses-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
 https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
 https://www.w3.org/TR/uievents/#events-keyboardevents

 How does "+=" works?
 https://stackoverflow.com/questions/6826260/how-does-plus-equal-work?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
 */


/**
 * Digits 0-9
 */

function pressedDigitOne() {
x = document.getElementById('textbox');
x.value += "1"; // Clarify what "+=" does.
}

function pressedDigitTwo() {
  x = document.getElementById('textbox');
  x.value += "2";
}

function pressedDigitThree() {
  x = document.getElementById('textbox');
  x.value += "3";
}

function pressedDigitFour() {
x = document.getElementById('textbox');
x.value += "4";
}

function pressedDigitFive() {
  x = document.getElementById('textbox');
  x.value += "5";
}

function pressedDigitSix() {
  x = document.getElementById('textbox');
  x.value += "6";
}

function pressedDigitSeven() {
x = document.getElementById('textbox');
x.value += "7";
}

function pressedDigitEight() {
  x = document.getElementById('textbox');
  x.value += "8";
}

function pressedDigitNine() {
  x = document.getElementById('textbox');
  x.value += "9";
}

function pressedDigitZero() {
x = document.getElementById('textbox');
x.value += "0";
}

/**
 * Operators
 */

function pressedDigitPlusSign() {
document.getElementById('textbox').value += "+";
}

function pressedDigitDividedSign() {
document.getElementById('textbox').value += "/";
}

function pressedDigitMultipliedSign() {
document.getElementById('textbox').value += "*";
}

function pressedDigitSubtractedSign() {
document.getElementById('textbox').value += "-";
}

function pressedDigitEqualsTo() {
    document.getElementById('textbox').value =
    eval(document.getElementById("textbox").value);                             // Clarify "eval".
}

/**
 * Other buttons
 */

function pressDigitClear() {
document.getElementById('textbox').value = "";
}

function pressedDigitDot() {
document.getElementById('textbox').value += ".";
}

/**
 * Event listener
 */



document.addEventListener("keypress", function onEvent(event) {

    /**
     * Digits 0-9
     */

    if (event.key === "1") {                   // #1
        pressedDigitOne();
    } else if (event.key === "2") {            // #2
        pressedDigitTwo();
    } else if (event.key === "3") {            // #3
      pressedDigitThree();
    } else if (event.key === "4") {            // #4
      pressedDigitFour();
    } else if (event.key === "5") {            // #5
        pressedDigitFive();
    } else if (event.key === "6") {            // #6
      pressedDigitSix();
    } else if (event.key === "7") {            // #7
      pressedDigitSeven();
    } else if (event.key === "8") {            // #8
      pressedDigitEight();
    } else if (event.key === "9") {            // #9
      pressedDigitNine();

    /**
     * Operators
     */

    } else if (event.key === "+") {            // #[+]
        pressedDigitPlusSign();
      } else if (event.key === "-") {          // #[-]
          pressedDigitSubtractedSign();
      } else if (event.key === "*") {          // #[*]
          pressedDigitMultipliedSign();
      } else if (event.key === "/") {          // #[/]
          pressedDigitDividedSign();
      }

/**
 * Other buttons
 */

else if (event.key === "Enter" || event.key === "=" ) {  // #[/]
    pressedDigitEqualsTo();
}

});
