// Tasca 1. Demana introduir dos números i digues quin és més gran, quin és més petit o si són iguals.

var num1 = window.prompt("Introdueix un número.");
var num2 = window.prompt("Introdueix un altre.");

if (num1 < num2) {
	document.write("Tasca 1: " +num1+ " és més petit que " +num2+ ".</br>");
} else if (num1 > num2) {
	document.write("Tasca 1: " +num1+ " és més gran que " +num2+ ".</br>");
} else if ( num1 == num2) {
	document.write("Tasca 1: " +num1+ " i " +num2+ " són iguals.</br>");
}

document.write("</br>");

// Tasca 2. Demana introduir un número, i mostra la seva taula de multiplicar.

var num3 = window.prompt("Introdueix un número a multiplicar.");

document.write("Tasca 2:</br>");

for (mult = 0; mult <= 10; mult++) {
	document.write(num3+ " x " +mult+ " = " +num3*mult+ "</br>");
}

document.write("</br>");

// Tasca 3. Demana introduir el nom, l’edat i el correu electrònic, i mostra’ls per pantalla juntament amb el text:

// "Hola nomIntroduit cognomsIntroduits!

// Moltes gràcies per presentar-te, i dir-me que tens anysIntroduits.
// Em guardaré el teu correu electrònic (emailIntroduit) per si mai et vull enviar un missatge.

// A reveure!”

var nom = window.prompt("Com et dius?\nIntrodueix el teu nom i cognoms.");
var anys = window.prompt("Quants anys tens?");
var email = window.prompt("Quin és el teu correu electrònic?");

document.write("Tasca 3:</br>Hola, " +nom+ "!</br></br>Moltes gràcies per presentar-te, i dir-me que tens " +anys+ " anys.</br>Em guardaré el teu correu electrònic " +email+ " per si mai et vull enviar un missatge.</br></br>A reveure!");
