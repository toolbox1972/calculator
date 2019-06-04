<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/index.css">
  <title>Calculatyor</title>
</head>
<body>

<div class="wrapper">

    <div class="header-1">Calculator</div>

    <div class="content">

    <div id="display-area" class="display-area">
        <!-- <div id="textbox" class="textbox"></div> -->
        <input type="text" name="Input" id="textbox" class="textbox" readonly>
    </div>

    <div class="button-area">

          <!-- column-1 -->
        <div id="c1r1" class="c1r1" onclick="pressedDigitSeven()">7</div>
        <div class="c1r2" onclick="pressedDigitFour()">4</div>
        <div class="c1r3" onclick="pressedDigitOne()">1</div>
        <div class="c1r4" onclick="pressDigitClear()">C</div>
        <!-- column-2 -->
        <div class="c2r1" onclick="pressedDigitEight()">8</div>
        <div class="c2r2" onclick="pressedDigitFive()">5</div>
        <div class="c2r3" onclick="pressedDigitTwo()">2</div>
        <div class="c2r4" onclick="pressedDigitZero()">0</div>
        <!-- column-3 -->
        <div class="c3r1" onclick="pressedDigitNine()">9</div>
        <div class="c3r2" onclick="pressedDigitSix()">6</div>
        <div class="c3r3" onclick= "pressedDigitThree()">3</div>
        <div class="c3r4" onclick= "pressedDigitDot()">.</div>
        <!-- column-4 -->
        <div class="c4r1" onclick="pressedDigitDividedSign()">/</div>
        <div class="c4r2" onclick="pressedDigitMultipliedSign()">x</div>
        <div class="c4r3" onclick="pressedDigitSubtractedSign()">-</div>
        <div class="c4r4" onclick="pressedDigitPlusSign()">+</div>

        <div class="equal-button" onclick="pressedDigitEqualsTo()">=</div>

    </div>

    </div>

</div> <!-- Closure wrapper -->


<!-- Javascript -->
<script src="js/index.js"></script>
</body>
</html>
