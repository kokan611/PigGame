'use strict';
//Selecting Elements
const score0EL= document.querySelector("#score--0");
const score1EL= document.querySelector("#score--1");
const current0EL=document.querySelector("#current--0");
const current1EL=document.querySelector("#current--1");
const player0EL= document.querySelector(".player--0");
const player1EL= document.querySelector(".player--1");
const diceEL= document.querySelector(".dice");
const btnNew= document.querySelector(".btn--new");
const btnRoll= document.querySelector(".btn--roll");
const btnHold= document.querySelector(".btn--hold");

//Intial Values
score0EL.textContent=0;
score1EL.textContent=0;
diceEL.classList.add("hidden");
let currentScore=0;
let active=0;
const scores=[0,0];
let play = true;

const switchP= function(){
    document.getElementById(`current--${active}`).textContent=0;
        active= active==0?1:0 ;
        currentScore=0;
        player0EL.classList.toggle("player--active");
        player1EL.classList.toggle("player--active");

}
//Rendeering Images according to dice value
btnRoll.addEventListener("click",function()
{  if(play)
    {
        let diceNum= Math.floor(Math.random()*6)+1;
        diceEL.classList.remove("hidden");
        diceEL.src="dice-"+diceNum+".png";
        //if value is not equals to 1
        if(diceNum!=1)
        {//add score
    currentScore+=diceNum;
     document.getElementById(`current--${active}`).textContent=currentScore;
        }
        else{// switch player
    switchP();
        } 
    }
    
});
//Holding the score
btnHold.addEventListener("click",function()
{
    if(play)
    {
        scores[active]+=currentScore;
        document.getElementById(`score--${active}`).textContent=scores[active];
        if(scores[active]>=20)
        { play=false;
            diceEL.classList.add("hidden");
            document.querySelector(`.player--${active}`).classList.add("player--winner");
            document.querySelector(`.player--${active}`).classList.remove("player--active");
        }
        
        else 
        switchP();
        }
    }
);
//Refeshing the game
btnNew.addEventListener("click",function(){
    score0EL.textContent=0;
    score1EL.textContent=0;
    scores[0]=0;
    scores[1]=0;
    document.querySelector("img").classList.add("hidden");
    document.querySelector(`.player--${active}`).classList.remove("player--winner");
            document.querySelector(`.player--${0}`).classList.add("player--active");
            diceEL.classList.remove("hidden");
    active=0;
    play=true;
});
