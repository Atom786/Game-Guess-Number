"use strict";
 let attempt = 1, score=20, highscore =0;
let botNumber = Math.trunc(Math.random() *20) +1;
// create func to display the message about given no.
const display = function(message) {
    document.querySelector(".message").textContent = message;
}
//  to display the guessNo on display
const guessDisplay = function (guess) {
    document.querySelector(".guessNum").textContent = guess;
    
}
// call display func to change the text in html
display("Guess the Number ");
 // click on submit button func
document.querySelector(".check").addEventListener(("click"), function() {
    // take the value from input into num
  const num =Number(document.querySelector(".num").value);
    if (!num) {
        display("No Number");
    }else if(num === botNumber){
        display('Correct Number');
        guessDisplay(`Guess Number = ${botNumber}`);
        document.querySelector(".Attempt").textContent = `Attempt = ${attempt}`;
        document.querySelector(".score").textContent = `Score = ${score}`;
        if (score >highscore ) {
            document.querySelector(".Highscore").textContent = `Highscore = ${score}`;
            highscore = score;
        }
        document.querySelector("body").style.backgroundColor = "Green"
        document.querySelector(".guessNum").style.color = "white"

    }else if (num !== botNumber) {
        display(num > botNumber ?   'Greater then geuss no' : 'Less then guess no');
        attempt++;
        score --;
        document.querySelector(".score").textContent = `Score = ${score}`;

    }
});
// to start game again.
document.querySelector(".again").addEventListener(("click"), function () {
     
    // change display screen
    display("Start guessing...");
    // change the guessnum
    botNumber = Math.trunc(Math.random() * 20) + 1;
    // 
    document.querySelector(".Attempt").textContent = `Attempt = 0`;
    document.querySelector(".score").textContent = `Score = 20`;
    guessDisplay(`Guess Number = ?`);
   // document.querySelector('.score').textContent = score;
  //  document.querySelector('.number').textContent = '?';
      //document.querySelector('.guess').value = ' ';
 //   document.querySelector('body').style.backgroundColor = '#222';
 //  document.querySelector('.bet').style.color = 'white';
  });
    //     document.querySelector(".message").textContent = "   Greater then geuss no.";
    //     attempt++;
    // }else{
    //     document.querySelector(".message").textContent = "   Less then geuss no.";
    //     attempt++;
    // }