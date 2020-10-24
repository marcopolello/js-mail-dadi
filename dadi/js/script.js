// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// variabili
var playerDado;
var pcDado;


// creo due eventi click per i due bottoni

// bottone 1 che tira il dado per il giocatore
var bottonePlayer = document.getElementById('bottone_1');
bottonePlayer.addEventListener('click',
 function()
 {
   var playerDado = Math.floor(Math.random() * 6) + 1 ;
   console.log(playerDado);
   // document.getElementById('giocatore').innerHTML = "tu hai fatto: <br> " + playerDado;

   var pcDado = Math.floor(Math.random() * 6) + 1 ;
   // document.getElementById('computer').innerHTML = "il pc fatto: <br> " + pcDado;
   console.log(pcDado);


// stabilisco il vincitore dal risultato
// confronto i numeri usciti e stampo il risultato
    if (playerDado > pcDado)
    {
      document.getElementById('vincitore').innerHTML = "Hai vinto tu"
    }
    else if (playerDado < pcDado)
    {
      document.getElementById('vincitore').innerHTML = "Ha vinto il pc"
    }
    else
    {
      document.getElementById('vincitore').innerHTML = "La partita è finita in pareggio"
    }

    // output img dadi utente
    if (playerDado === 1) {
      document.getElementById('dado1').className = "visibile";
      document.getElementById('dado2').className = "invisibile";
      document.getElementById('dado3').className = "invisibile";
      document.getElementById('dado4').className = "invisibile";
      document.getElementById('dado5').className = "invisibile";
      document.getElementById('dado6').className = "invisibile";
    } else if (playerDado === 2) {
      document.getElementById('dado1').className = "invisibile";
      document.getElementById('dado2').className = "visibile";
      document.getElementById('dado3').className = "invisibile";
      document.getElementById('dado4').className = "invisibile";
      document.getElementById('dado5').className = "invisibile";
      document.getElementById('dado6').className = "invisibile";
    } else if (playerDado === 3) {
      document.getElementById('dado1').className = "invisibile";
      document.getElementById('dado2').className = "invisibile";
      document.getElementById('dado3').className = "visibile";
      document.getElementById('dado4').className = "invisibile";
      document.getElementById('dado5').className = "invisibile";
      document.getElementById('dado6').className = "invisibile";
    } else if (playerDado === 4) {
      document.getElementById('dado1').className = "invisibile";
      document.getElementById('dado2').className = "invisibile";
      document.getElementById('dado3').className = "invisibile";
      document.getElementById('dado4').className = "visibile";
      document.getElementById('dado5').className = "invisibile";
      document.getElementById('dado6').className = "invisibile";
    } else if (playerDado === 5) {
      document.getElementById('dado1').className = "invisibile";
      document.getElementById('dado2').className = "invisibile";
      document.getElementById('dado3').className = "invisibile";
      document.getElementById('dado4').className = "invisibile";
      document.getElementById('dado5').className = "visibile";
      document.getElementById('dado6').className = "invisibile";
    } else if (playerDado === 6) {
      document.getElementById('dado1').className = "invisibile";
      document.getElementById('dado2').className = "invisibile";
      document.getElementById('dado3').className = "invisibile";
      document.getElementById('dado4').className = "invisibile";
      document.getElementById('dado5').className = "invisibile";
      document.getElementById('dado6').className = "visibile";
    }

    //output dadi pc
    if (pcDado === 1) {
      document.getElementById('dadopc1').className = "visibile";
      document.getElementById('dadopc2').className = "invisibile";
      document.getElementById('dadopc3').className = "invisibile";
      document.getElementById('dadopc4').className = "invisibile";
      document.getElementById('dadopc5').className = "invisibile";
      document.getElementById('dadopc6').className = "invisibile";
    } else if (pcDado === 2) {
      document.getElementById('dadopc1').className = "invisibile";
      document.getElementById('dadopc2').className = "visibile";
      document.getElementById('dadopc3').className = "invisibile";
      document.getElementById('dadopc4').className = "invisibile";
      document.getElementById('dadopc5').className = "invisibile";
      document.getElementById('dadopc6').className = "invisibile";
    } else if (pcDado === 3) {
      document.getElementById('dadopc1').className = "invisibile";
      document.getElementById('dadopc2').className = "invisibile";
      document.getElementById('dadopc3').className = "visibile";
      document.getElementById('dadopc4').className = "invisibile";
      document.getElementById('dadopc5').className = "invisibile";
      document.getElementById('dadopc6').className = "invisibile";
    } else if (pcDado === 4) {
      document.getElementById('dadopc1').className = "invisibile";
      document.getElementById('dadopc2').className = "invisibile";
      document.getElementById('dadopc3').className = "invisibile";
      document.getElementById('dadopc4').className = "visibile";
      document.getElementById('dadopc5').className = "invisibile";
      document.getElementById('dadopc6').className = "invisibile";
    } else if (pcDado === 5) {
      document.getElementById('dadopc1').className = "invisibile";
      document.getElementById('dadopc2').className = "invisibile";
      document.getElementById('dadopc3').className = "invisibile";
      document.getElementById('dadopc4').className = "invisibile";
      document.getElementById('dadopc5').className = "visibile";
      document.getElementById('dadopc6').className = "invisibile";
    } else if (pcDado === 6) {
      document.getElementById('dadopc1').className = "invisibile";
      document.getElementById('dadopc2').className = "invisibile";
      document.getElementById('dadopc3').className = "invisibile";
      document.getElementById('dadopc4').className = "invisibile";
      document.getElementById('dadopc5').className = "invisibile";
      document.getElementById('dadopc6').className = "visibile";
    }
  }
)
