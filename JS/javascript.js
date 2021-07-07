var codeNumber1;
var codeNumber2;
var codeNumber3;
var codeBreakerNumber;
var codeBreakerNumber1;
var codeBreakerNumber2;
var codeBreakerNumber3;
var counterTries = 0;
const MAXTRIES = 12;
var correctPosition;
var correctNumber;

function rdmNumber() {
  let rdmNumber = Math.round(Math.random() * 9);
  return rdmNumber;
}

function generateCode() {
  codeNumber1 = rdmNumber();
  codeNumber2 = rdmNumber();
  codeNumber3 = rdmNumber();
}

function inputToString() {
  codeBreakerNumber = document.getElementById("codeBreakerNumber").value;
  codeBreakerNumber.toString();
}

function stringToChar() {
  codeBreakerNumber1 = parseInt(codeBreakerNumber.charAt(0));
  codeBreakerNumber2 = parseInt(codeBreakerNumber.charAt(1));
  codeBreakerNumber3 = parseInt(codeBreakerNumber.charAt(2));
}

function checkCorrectPostion() {
  if (codeBreakerNumber1 == codeNumber1) {
    document.getElementById("correctPosition1").style.color = "#00ff00";
  }
  if (codeBreakerNumber2 == codeNumber2) {
    document.getElementById("correctPosition2").style.color = "#00ff00";
  }
  if (codeBreakerNumber3 == codeNumber3) {
    document.getElementById("correctPosition3").style.color = "#00ff00";
  } else document.getElementById("correctPosition3").style.color = "#0000000";
}

function checkCorrectNumber() {
  if (codeBreakerNumber1 == codeNumber2 || codeBreakerNumber1 == codeNumber3) {
    document.getElementById("correctPosition1").style.color = "#ffff00";
  }
  if (codeBreakerNumber2 == codeNumber1 || codeBreakerNumber2 == codeNumber3) {
    document.getElementById("correctPosition2").style.color = "#ffff00";
  }
  if (codeBreakerNumber3 == codeNumber1 || codeBreakerNumber3 == codeNumber2) {
    document.getElementById("correctPosition3").style.color = "#ffff00";
  } else document.getElementById("correctPosition3").style.color = "#0000000";
}

function compare() {
  if (counterTries == MAXTRIES) {
    alert("you got caught");
    reset();
    location.reload();
  } else if (
    codeBreakerNumber1 == codeNumber1 &&
    codeBreakerNumber2 == codeNumber2 &&
    codeBreakerNumber3 == codeNumber3
  ) {
    alert("entry denied");
    reset();
    location.reload();
  }
}

function counter() {
  counterTries++;
  document.getElementById("counter").innerHTML = counterTries;
}

function reset() {
  generateCode();
  counterTries = 0;
  document.getElementById("counter").innerHTML = counterTries;
  ocument.getElementById("correctPosition1").style.color = "#0000000";
  ocument.getElementById("correctPosition2").style.color = "#0000000";
  ocument.getElementById("correctPosition3").style.color = "#0000000";
}

function startGame() {
  inputToString();
  stringToChar();
  checkCorrectPostion();
  checkCorrectNumber();
  compare();
  counter();
}

generateCode();
// document.getElementById("enter").addEventListener("click", startGame());
