let userscor=0;
let compscor=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".state");
let userscore=document.querySelector("#user");
let compscore=document.querySelector("#comp");


const compchoice=()=>{
    const option=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
};

const showwinner=(userwin,userchoice,comp)=>{
    if(userwin){
        userscor++;
        userscore.innerText=userscor;
        console.log("Congrats buddy,You win");
        msg.innerText=`Congrats buddy, Your ${userchoice} beats ${comp}.`;
        msg.style.color="yellow";
        userscore.innerText ;
    }
    else{
        console.log("sorry buddy,You lose");
        msg.innerText=`Sorry buddy, ${comp} beats your ${userchoice}.`;
        msg.style.color="red";
        compscor++;
        compscore.innerText=compscor;
    }

};



function playgame(userchoice) {
    console.log("user choice = ", userchoice);

    const comp = compchoice();
    console.log("comp choice = ", comp);

    if (userchoice === comp) {
        console.log("game was draw");
        msg.innerText = "game was draw, Play again.";
        msg.style.color = "white";
    } else {
        let userwin = true;

        if (userchoice === "rock") {
            userwin = comp === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = comp === "scissor" ? false : true;
        }
        else {
            userwin = comp === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, comp);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {   const userchoice=choice.getAttribute("id");
        playgame(userchoice);
       
    });

});
    
