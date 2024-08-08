let gameSeq=[];
let userSeq=[];

let h2=document.querySelector("h2");
let btns=["red","blue","orange","purple"];
let level=0;
let started=false;

addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        level++;
    }
    levelUp();
})
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Leve ${level}`;

    let ranIdx=Math.floor((Math.random())*4);  //generation of random index fr array which contains div colors
    let ranColor=btns[ranIdx]; //accesing the generated index for random div color
    let randBtn=document.querySelector(`.${ranColor}`);// accesing the button of color class
    //we prviously gave btn =class to every color
    //so if color orange is generated randBtn will have class=btn orange 
    console.log(`${ranColor} is pressed`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    flash(randBtn);//calling flash function for the accessed button so that
    //the button flashes
}

function btnPress(){
    console.log("button was pressed");
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

//accesing all the buttons
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){ 
        setTimeout(levelUp(),1000);
    }
   
}else{
    console.log("game over");
    h2.innerHTML=`GAME OVER!<br> SCORE:${level}<br> press any key to start `;
    document.querySelector("body").style.backgroundColor="red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },100);
    reset();
}

}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    console.log("game reset");
}
