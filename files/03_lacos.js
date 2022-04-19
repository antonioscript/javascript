//***LAÇO WHILE***

/*while (condition) {
  // code block to be executed
}*/

var num = 0
while (num < 10) { // A expressão entre parênteses e o então é as "{}"
	alert(num)
	num = num + 1 // Poderia ser "var++"
}

//***DO WHILE***

/*do {
  // code block to be executed
}
while (condition);*/

var num1 = 0
do {
	alert(num1)
	num1++
} while (num1 < 10)

//***FOR***

/*for (inicialização; teste; incrementação) {
  // code block to be executed
}*/

for (var num2 = 0; num2 < 10; num2++) {
	alert(num2)
}