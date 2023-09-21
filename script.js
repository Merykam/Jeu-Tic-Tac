let game= document.querySelector(".game-container");

let container = document.querySelector(".container");

console.log(game);

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




for(i=0;i<400;i++){
   
  let div = document.createElement("div"); 
  div.className = "cell";
  div.id=i; 
  div.setAttribute("onclick", "game1(this.id)");
  game.appendChild(div); 




}
  

var squares =[];


// function run(turn){

//   const hasConsecutive = winner(turn);
  
//   if (hasConsecutive) {
//     // console.log(`Five consecutive squares with content ${contentToCheck} found.`);
//     console.log(`Five consecutive squares with content found.`);
    
//   } else {
//     // console.log(`No five consecutive squares with content ${contentToCheck} found.`);
//     console.log(`No five consecutive squares with content found.`);
//   }

// }
//   const contentToCheck = 2; // Change this to the content you want to check

  














 


function winner(turn){

  matrix=[];
    for(i=0;i<400;i++){
       
        squares[i]=document.getElementById(i).innerHTML;
            

    }
    console.log(squares);


    if (squares.length === 400) {
      
    
        for (let i = 0; i < 20; i++) {
          
        
        let chunk = squares.slice(i * 20, (i + 1) * 20);

        matrix.push(chunk);
        }

         console.log(matrix);

//test


  


// en test



    } else {
        console.error("The original array must have exactly 400 elements.");
    }


    
// function checkConsecutive(turn,matrix) {
    const rows = 20;
    const cols = 20;
    let count=0;
  
    // Check horizontally
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col <= cols - 5; col++) {
        // let consecutive = true;
      // console.log(matrix);
        for (let i = 0; i < 5; i++) {
          if (matrix[row] && matrix[row][col + i] == turn) {

             console.log(turn,matrix[row][col + i]);
            count++;
            if(count>=5){
              break;
            }
            // 
            // consecutive = false;
            // break;
          }else{
            count=0;
          }
          // else if (matrix[row] && matrix[row][col + i] == turn) {
            
          //   // return true;
          // }
        }

        if(count>=5){
          break;
          
      }
        // if (consecutive) {
        //   console.log(`Five consecutive squares with content found.`);
        //   // return true;
        // }
      }
      if(count>=5){
          
         console.log(`Five consecutive squares with content found.`);
        break;
      }else{
         console.log(`Five consecutive squares with content nooot found.`);
      }
    }
  
   
  
    // return false;
  }


// }




// let turn="X";


function game1(id){
    let element = document.getElementById(id);
    if(turn === "X" && element.innerHTML == ""){
        element.innerHTML="X";
        console.log(turn);
        winner(turn);
        // run(turn);
        // checkConsecutive(turn);
        turn="O";

    }else if(turn === "O" && element.innerHTML == ""){
        element.innerHTML="O";

        console.log(turn);
        winner(turn);
        // run(turn);
        // checkConsecutive(turn);
        turn="X";
    }

}



