let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let msg_container=document.querySelector(".msg-container");
let new_game=document.querySelector("#new-btn");
let turnO=true;

// winning patterns if fulfils then a player wins

let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// Functions to reset or for a new game if a player wins

const resetGame =()=>{
    enablebox();
    turnO=true;
    msg_container.classList.add("hide");
    boxes.forEach((box)=>{
        box.innerText="";
    })
};
const newGame=()=>{
    enablebox();
    turnO=true;
    msg_container.classList.add("hide");
    boxes.forEach((box)=>{
        box.innerText="";
    })
};

// to make the inner Text(X and O) appears as they are being toggled

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.disabled=true;
        }
        else{
            box.innerText="X";
            turnO=true;
            box.disabled=true;
        }
        checkwinner();
    })
})

// to disable boxes after the winner is being announced(function)

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

// to enable boxes after the game is being reset(function)

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

// function to announce who the winner isFinite(Is it X or O???)

const announcewinner=(winner)=>{
  msg.innerText=`Winner is ${winner}`;
  msg_container.classList.remove("hide");
  disablebox();
}

// to check who the winner is based on winning patterns

const checkwinner = ( ) => {
    for(let pattern of winpatterns){
    let posit1=boxes[pattern[0]].innerText;
    let posit2=boxes[pattern[1]].innerText;
    let posit3=boxes[pattern[2]].innerText;
    if(posit1 != "" && posit2 != "" && posit3 != "" ){
        if(posit1 === posit2 && posit2 === posit3 ){
            console.log(`winner is ${posit1}`);
            announcewinner(posit1);
            return;
        }
    }
}
}

// to reset the whole game

reset_btn.addEventListener("click",()=>{
    resetGame();
});
new_game.addEventListener("click",()=>{
    newGame();
});



