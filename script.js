//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = parseFloat(prompt("inserisci un numero per X"))
let y= parseFloat(prompt("inserisci un numero per Y"))

if (x > y ){ 
    console.log (`${x} è maggiore di ${y}`)
} else 
    console.log (`${x} è minore di ${y}`)


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = parseFloat(prompt("inserisci un numero e ti dirò se è grande"))
if(num < 5) {
    console.log(`il numero ${num} è Tiny`)
} else if (num < 10){
    console.log(`il numero ${num} è Small`)
} else if (num < 15) {
    console.log(`il numero ${num} è Medium`)
} else if (num < 20) {
    console.log(`il numero ${num} è Large`)
} else (num >= 20) 
    console.log(`il numero ${num} è Huge`)

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
    if (i === 3 || i === 8) {
        continue
        }
        console.log (i)
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log (`il numero ${i} è pari`)
    } else console.log (`il numero ${i} è dispari`)
    
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let operatore = prompt("aggiungi un operatore a scelta tra '+' o '-'")
let num1 = parseInt(prompt("inserisci un numero intero"))
let num2 = parseInt(prompt("inserisci un altro numero intero"))
let risultato = (num1 + num2) || (num1 - num2)
if (num1 === 8){
    console.log (`il primo numero è uguale a 8 e ${num1} ${operatore} ${num2} fa ${risultato}`)
} else if (num2 === 8 ) {
    console.log (`il secondo numero è uguale a 8 e ${num1} ${operatore} ${num2} fa ${risultato}`)
}
else if (num1 + num2 === 8) {
    console.log(`la somma di ${num1} e ${num2} è uguale a ${rislutato}`)
}
else if (num1 - num2 === 8) {
    console.log (`la differenza tra ${num1} e ${num2} è uguale a ${risultato}`)
} 
else if (operatore !== "+" || operatore !== "-" ) {
    console.log("Operatore non corretto")
}
else console.log (`il risultato tra ${num1} ${operatore} ${num2} è ${risultato} e non c'è nessun 8 tra i tuoi numeri scelti`)

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/