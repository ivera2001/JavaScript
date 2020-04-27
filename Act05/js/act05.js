// Tasca 1. Imprimeix la taula de multiplicar del 9, utilitzant un bucle.

var num1 = 9;

for (mult = 0; mult <= 10; mult++) {
	document.write(num1+ " x " +mult+ " = " +num1*mult+ "</br>");
}

document.write("</br>");

// Tasca 2. Imprimeix la taula de multiplicar del 5 a la inversa, utilitzant un bucle.

var num2 = 5;

for (mult = 10; mult >= 0; mult--) {
	document.write(num2+ " x " +mult+ " = " +num2*mult+ "</br>");
}

document.write("</br>");

// Tasca 3. Imprimeix totes les taules de multiplicar, utilitzant dos o més bucles.

var num3 = 1;

for (mult = 0; num3 <= 10; mult++) {
	document.write(num3+ " x " +mult+ " = " +num3*mult+ "</br>");
	
	if (mult == 10) {
		document.write("</br>");
		mult = -1;
		num3++;
	}
}
