let game= document.querySelector(".game-container");

let container = document.querySelector(".container");

console.log(game);

let i;



for(i=0;i<400;i++){
   
    let div = document.createElement("div"); 
    div.className = "cell";
    div.id=i; 
    div.setAttribute("onclick", "game1(this.id)");
    game.appendChild(div); 




}

let squares =[];

function winner(){
    for(i=0;i<400;i++){

        squares[i]=document.getElementById(i).innerHTML;


    }
    console.log(squares);


}


let turn="X";

function game1(id){
    let element = document.getElementById(id);
    if(turn === "X" && element.innerHTML == ""){
        element.innerHTML="X";
        turn="O";
    }else if(turn === "O" && element.innerHTML == ""){
        element.innerHTML="O";
        turn="X";
    }
    winner();
}



