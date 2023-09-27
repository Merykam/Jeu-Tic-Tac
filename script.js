let game = document.querySelector(".game-container");

let container = document.querySelector(".container");


let winnerTitle = document.querySelector(".winner h1");




let score1 = parseInt(localStorage.getItem("score1")) || 0;
let score2 = parseInt(localStorage.getItem("score2")) || 0;

// Mettre à jour l'affichage initial des scores
document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;

// console.log(game);

let i;
let turn = "X";

let matrix = [];




// function checkConsecutive(turn) {
//     const rows = 20;
//     const cols = 20;

//     // Check horizontally
//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col <= cols - 5; col++) {
//         let consecutive = true;
//         for (let i = 0; i < 5; i++) {
//           if (matrix[row][col + i] !== turn) {
//             consecutive = false;
//             break;
//           }
//         }
//         if (consecutive) {
//           return true;
//         }
//       }
//     }



//     return false;
//   }




for (i = 1; i <= 400; i++) {

  let div = document.createElement("div");
  div.className = "cell";
  div.id = i;
  div.setAttribute("onclick", "game1(this.id)");
  game.appendChild(div);




}


var squares = [];



function winner(turn,row) {

  matrix = [];
  for (i = 1; i <= 400; i++) {

    squares[i-1] = document.getElementById(i).innerHTML;


  }
  // console.log(squares);


  if (squares.length === 400) {


    for (let i = 0; i < 20; i++) {


      let chunk = squares.slice(i * 20, (i + 1) * 20);

      matrix.push(chunk);
    }

    // console.log(matrix);




  } else {
    console.error("The original array must have exactly 400 elements.");
  }



  // const rows = 20;
  const cols = 20;
  let count = 0;

  // Check horizontally
  // for (let row = 0; row < rows; row++) {
    
    for (let col = 0; col <= cols - 5; col++) {

      for (let i = 0; i < 5; i++) {

        if (matrix[row] && matrix[row][col + i] == turn) {
          

          // console.log(turn, matrix[row][col + i]);

          count++;

          console.log(count);


          // if (count >= 5) {
          //   break;
          // }

        } else{
          break;
        }

      }

      // if(count<5){
      //   count=0;
      // }

      if (count >= 5) {
        break;

      }else {
        count = 0;
      }

    }



 // Check vertically
 for (let col = 0; col < cols; col++) {
  for (let row1 = 0; row1 <= 15; row1++) {
    // let consecutive = true;
    for (let i = 0; i < 5; i++) {
      if (matrix[row1 + i][col] == turn) {


        count++;
        // consecutive = false;
        // break;
      }else{
        break;
      }
    }


    
    if (count >= 5) {
      break;

    }else {
      count = 0;
    }

    // if (consecutive) {
    //   return true;
    // }
  }
}







  // Check diagonally (top-left to bottom-right)
  for (let row2 = 0; row2 <= 15; row2++) {
    for (let col = 0; col <= 15; col++) {
      // let consecutive = true;
      for (let i = 0; i < 5; i++) {
        if (matrix[row2 + i][col + i] == turn) {

          count++;
          // consecutive = false;
          // break;
        }else{
          break;
        }
      }


          
    if (count >= 5) {
      break;

    }else {
      count = 0;
    }
      // if (consecutive) {
      //   return true;
      // }
    }
  }

  // Check diagonally (top-right to bottom-left)
  for (let row3 = 0; row3 <= 15; row3++) {
    for (let col = 4; col < 20; col++) {
      // let consecutive = true;
      for (let i = 0; i < 5; i++) {
        if (matrix[row3 + i][col - i] == turn) {
          count++;
          // consecutive = false;
          // break;
        }else{
          break;
        }
      }


      if (count >= 5) {
        break;
  
      }else {
        count = 0;
      }
      // if (consecutive) {
      //   return true;
      // }
    }
  }






    if (count >= 5) {

      if(turn=="X"){

        score1++;

        console.log(score1);

        localStorage.setItem("score1",score1);
        let scorej1=localStorage.getItem("score1");

        let j1=document.getElementById("score1");
        j1.innerHTML=scorej1;
      


      }else if(turn == "O"){
        score2++;
        console.log(score2);
        localStorage.setItem("score2",score2);
        let scorej2=localStorage.getItem("score2");

        let j2=document.getElementById("score2");

        j2.innerHTML=scorej2;

      }

      // winnerTitle.innerHTML=`${turn} is the winner`;

      console.log(`Five consecutive squares with content found.`);
      // break;
    } else {
      count=0;
      
      console.log(`Five consecutive squares with content nooot found.`);
    }
  // }



}





function game1(id) {
  let element = document.getElementById(id);
  let row = Math.ceil(id/20)-1;

  // console.log(row);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    element.classList.add("red");   
    // console.log(turn);
    winner(turn,row);
    // run(turn);
    // checkConsecutive(turn);
    turn = "O";

  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    element.classList.add("blue");

    // console.log(turn);
    winner(turn,row);
    // run(turn);
    // checkConsecutive(turn);
    turn = "X";
  }

}


function getItems(){
  let j1= localStorage.getItem("joueur1");
  let j2= localStorage.getItem("joueur2");


  let firstplayer=document.getElementById("firstplayer");
  let secondplayer=document.getElementById("secondplayer");

  firstplayer.innerHTML=j1;
  secondplayer.innerHTML=j2;



  console.log(j1);

  console.log(j2);
}

getItems();


function deconnection(){
  localStorage.clear();
  window.location.href = "welcome.html";
}

function refresh(){
  location.reload(); 
}


