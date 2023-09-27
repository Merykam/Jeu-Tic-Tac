

function afficherNoms() {
    // Récupérer les valeurs saisies dans les champs de texte
    let joueur1 = document.getElementById("player1Input").value;
    let joueur2 = document.getElementById("player2Input").value;


    localStorage.setItem("joueur1", joueur1);
    localStorage.setItem("joueur2", joueur2);
  
//    console.log(joueur1,joueur2);
  }
  
  afficherNoms();