/* =========================================
	JavaScript Data Types
========================================= */

// String
let nome = "Rodrigo Oliveira";

// Number
let idade = 50.50;

// Boolean
let solteiro = true;

// Array
let frutas = [ "goiaba", "maçã", "banana" ]

// Object
let carro = new Object();
carro.fabricacao = "2025";
carro.cor = "azul";

// Function
let soma = function(a, b) { return a + b };

/* =========================================
	Variables
========================================= */

// var - Global Scope
if(true) {
	var person = "Rodrigo";
}

// let - Block Scope
if(true) {
	let newPerson = "Mariana";
}

// const - Constant Variable
const anotherPerson = "Mickey Mouse";
