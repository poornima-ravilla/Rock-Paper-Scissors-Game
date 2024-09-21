let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

//User Choice
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice=()=>{
  let options=["rock","paper","scissors"];
  let index=Math.floor(Math.random()*3);
  return options[index];
 //rock,paper,scissors
}

let playGame=(userChoice)=>{
  // Generate Computer Choice
  const compChoice=genCompChoice();
  
  if(userChoice===compChoice){
    //draw Game
    drawGame();
  }
  else{
    let userWin="true";
    if(userChoice==="rock"){
      //paper,scissors
      userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
      //rock,scissors
      userWin=compChoice==="rock"?true:false;
    }
    else{
      //rock,paper
      userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  } 
}

const drawGame=()=>{
  msg.innerText="Game was draw!!Play Again";
  msg.style.backgroundColor="rgb(87, 28, 122)";
}

const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.style.backgroundColor="green";
    msg.innerText=`You Win!!Your ${userChoice} beats ${compChoice}`;
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
}