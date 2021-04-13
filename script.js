//creazione Array Cognomi
var surname = ['Dida', 'Costacurta', 'Nesta', 'Maldini', 'Kaladze', 'Gattuso', 'Pirlo', 'Seedorf', 'Rui Costa', 'Shevchenko', 'Inzaghi'];

//prompt inserimento proprio cognome
var inputSurname = prompt("Inserisci il tuo Cognome");

//inseriamo il cognome indicato all'interno della lista
surname.push(inputSurname);


//rendiamo la lista di carattere minuscolo qualsiasi sia il carattere inserito dall'utente
for (i = 0; i < surname.length; i++) {
    surname[i] = surname[i].toLowerCase();
}

//stampa la lista in ordine alfabetico utilizzando .sort
console.log(surname.sort());

//indichiamo la posizione umana del cognome inserito
console.log(surname.indexOf(inputSurname.toLowerCase()) + 1);
