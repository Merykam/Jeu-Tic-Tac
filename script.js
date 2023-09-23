let game = document.querySelector(".game-container");

let container = document.querySelector(".container");


let winnerTitle = document.querySelector(".winner h1");

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




    if (count >= 5) {


      winnerTitle.innerHTML=`${turn} is the winner`;

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
    
    // console.log(turn);
    winner(turn,row);
    // run(turn);
    // checkConsecutive(turn);
    turn = "O";

  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";

    // console.log(turn);
    winner(turn,row);
    // run(turn);
    // checkConsecutive(turn);
    turn = "X";
  }

}






// for(let row=0; row<=20; row++){

//   for(let col=0; col<=20; col++){

//     for(let j=0;j<5;j++){


//       if(matrix[row][col+j]=="x"){

//         console.log("noice");
  
//        }

//     }

     


//   }

// }



