// esercizio MAIL
// Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo una lista di mail tramite un array
var lista = ["marco@gmail.com", "davide@gmail.com", "nicolò@gmail.com", "john@gmail.com", "simone@gmail.com", "edoardo@gmail.com"];

for (var i = 0; i < lista.length; i++) {
  var item = lista[i];
  console.log(item);
}

// CHIEDO ALL'UTENTE LA SUA MAIL TRAMITE UN FORM
// genero una variabile che scatena una funzione successivamente al click
var check = document.getElementById('controlla');
// al click di questo input creo una funzione
check.addEventListener('click',
function(){
    //mail data da input utente
    var mail = document.getElementById('indirizzo').value;
    // guardo se la mail è uguale a uno degli elementi della lista array
    if (mail === item) {
      console.log(mail);
      document.getElementById('mail_ok').innerHTML = "la tua mail è corretta";
    }
});
