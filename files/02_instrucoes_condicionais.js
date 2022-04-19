//Instruções Condicionais

//***IF***

/*if (condition) {
  //  block of code to be executed if the condition is true
}*/

var num = 1;
if (num === 1) { //Diferente de Python, a condição fica entre parênteses
	alert("O valor da variável é 1"); // Oberseve que diferente de python, o igual é assim "==="
									  // No lugar do dois pontos encontra-se a chave
}

//***IF_ELSE***

/*if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
} */

var num2 = 5;
if (num2 ===5) {
	alert("O valor da variável é 5")
} else {
	alert("O valor da variável é difente de 5")
}

//***ELSE IF***

/*if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}*/

var time = 9
if (time < 12) {
	alert("Bom dia!")
} else if (time < 18) {
	alert("Boa tarde!")
} else {
	alert("Boa Noite")
}


//***SWITCH***

/*switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}*/

var mes = 5
switch (mes) {
	case 1:
		alert("Janeiro")
		break
	case 2:
		alert("Fevereiro")
		break
	case 3:
		alert("Março")
		break
	default:
		alert("O mês não é Janeiro, nem Fevereiro, nem Março")
}