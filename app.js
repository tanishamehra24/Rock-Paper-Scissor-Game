let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
 
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
//rock,paper,scissor//
const options=["rock","paper","scissors"];
const ranIdx=Math.floor(Math.random()*3);
return options[ranIdx];
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw! PLAY AGAIN ";
    msg.style.backgroundColor="#001242";
};

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
   userScore++;
   userScorePara.innerText=userScore;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="#2BA84A";

    
}else{
   compScore++;
   compScorePara.innerText= compScore;
    msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
   msg.style.backgroundColor="#FF1D15";
}
};

const playGame=(userChoice)=>{
    //generate computer choice//
const compChoice=genCompChoice();

if(userChoice===compChoice){
    //draw
    drawGame();
}
else{
   let userWin=true;
   if(userChoice==="rock"){
    //scissors,paper
   userWin= compChoice==="paper"?false:true;
   }else if(userChoice==="paper"){
    //rock,scissors
    userWin=compChoice==="scissors"?false:true;
   }else{
    //rock,paper
    userWin=compChoice==="rock"?false:true;
   }
   showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
    });
});
