let randomNumber1 = Math.random();
// console.log(randomNumber1)
let randomNumber2 = Math.random();
// console.log(randomNumber2)

function diceValue(n){
  return Math.floor(n * 6) + 1;
}
// console.log(diceValue(randomNumber1))
// console.log(diceValue(randomNumber2))

function diceImgGen(n){
  switch(n){
    case 1:
      img =  "images/dice1.png";
      break;
    case 2:
      img =  "images/dice2.png";
      break;
    case 3:
      img =  "images/dice3.png";
      break;
    case 4:
      img =  "images/dice4.png";
      break;
    case 5:
      img =  "images/dice5.png";
      break;
    case 6:
      img =  "images/dice6.png";
      break;
  }
  return img
}

function winner(p1, p2){
  if (p1 === p2){
    return " Draw! "
  } else if (p1 > p2){
    return " Player 1 win! "
  } else {
    return " Player 2 win! "
  }
}
document.getElementById("dice1").src=diceImgGen(diceValue(randomNumber1));
document.getElementById("dice2").src=diceImgGen(diceValue(randomNumber2));
// document.getElementById("result").innerH=winner(diceValue(randomNumber1), diceValue(randomNumber2));
document.getElementById("result").innerHTML=winner(diceValue(randomNumber1), diceValue(randomNumber2));
