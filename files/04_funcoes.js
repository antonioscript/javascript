//***FUNÇÕES***

/*function name(parameter1, parameter2, parameter3) {
  // code to be executed
}*/


//Função que diz Hello
function sayHello() {
    console.log("Hello, programa funcionando!!!")
}
sayHello() // Chamada da função


// Ex: Função que soma dois números

function somaNumeros(num1, num2) {
    console.log(num1 + num2)
}
somaNumeros(5,4) //Chamada da função passando os valores

//Ex: Função que verifica se o número é par ou ímpar

function parImp (numero) {
    if (numero%2 == 0) {
        console.log("O número é par")
    } else {
        console.log("O numero é ímpar")
    }
}
parImp(8) // Call

