let user=0;
let comp=0;
const ch=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
let user_score=document.querySelector("#user");
let comp_score=document.querySelector("#comp");
const generate=()=>{
    let option=["rock","paper","scissor"];
    // new concept
    let index=Math.floor(Math.random()*3);
    return option[index];
}
const showWinner=(userWin)=>{
    if(userWin){
        user++;
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor="green";
    }
    else{
        comp++;
        msg.innerText="YOU LOSE!";
        msg.style.backgroundColor="red";
    }
    user_score.innerText=user;
    comp_score.innerText=comp;
}
const draw=()=>{
    msg.innerText="GAME DRAW!";
}
const playGame=(userChoice)=>{
    // generate computer choice
    const compChoice=generate();
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}
ch.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});


