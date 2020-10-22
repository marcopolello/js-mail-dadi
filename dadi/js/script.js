// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// variabili
var player;
var pc;


// creo due eventi click per i due bottoni

// bottone 1 che tira il dado per il giocatore
var bottonePlayer = document.getElementById('bottone_1');
bottonePlayer.addEventListener('click',
 function()
 {
   document.getElementById('giocatore').innerHTML = Math.floor(Math.random() * 6) + 1 ;
 }
)


// bottone 2 che tira il dado per il giocatore
var bottonePc = document.getElementById('bottone_2');
bottonePc.addEventListener('click',
 function()
 {
   document.getElementById('computer').innerHTML = Math.floor(Math.random() * 6) + 1 ;
 }
)

// stabilisco il vincitore dal risultato
