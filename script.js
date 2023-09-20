let game= document.querySelector(".game-container");

let container = document.querySelector(".container");

console.log(game);

let i;



for(i=0;i<400;i++){
   
    let div = document.createElement("div"); 
    div.className = "cell";
    div.id=i; 
    game.appendChild(div); 

}

