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
   document.getElementById('giocatore').innerHTML = "tu hai fatto: <br> " + playerDado;

   var pcDado = Math.floor(Math.random() * 6) + 1 ;
   document.getElementById('computer').innerHTML = "il pc fatto: <br> " + pcDado;
   console.log(pcDado);


// stabilisco il vincitore dal risultato
// confronto i numeri usciti e stampo il risultato
    if (playerDado > pcDado) {
      document.getElementById('vincitore').innerHTML = "Hai vinto tu"
    } else if (playerDado < pcDado) {
      document.getElementById('vincitore').innerHTML = "Ha vinto il pc"
    } else {
      document.getElementById('vincitore').innerHTML = "La partita è finita in pareggio"
    }

  }
)
