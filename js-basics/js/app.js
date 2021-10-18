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

/* =========================================
	Arrays
========================================= */

let meuArray = [
	'notebook',
	'mouse',
	150.00,
	{ // we can put everything inside an array
		memoria: "1GB",
		hd: "100GB"
	},
	[
		'notebook dell',
		'modelo 110'
	]
];
console.log(meuArray) // .length: array size

/* =========================================
	Object
========================================= */

let pessoa = {
	nome: "João",
	idade: 35,
	feliz: true,
	pets: [
		"cachorro", "gato"
	],
	carros: {
		camaro: {
			placa: "123456",
			cor: "amarelo",
		},
		uno: {
			placa: "987655",
			cor: "branco",
		}
	},
	andar: (km) => { console.log(`${pessoa.nome} andou ${km}km`) },
};

pessoa.nome = "Carlos";
pessoa.pets[0] = "papagaio";
console.log(pessoa.andar(25));

/* =========================================
	Arithmetic Operators
========================================= */

let n1 = 8;
let n2 = 7;
let n3 = 6;
resultado = (n1 + n2 + n3) / 3;

console.log(resultado);

/* =========================================
	Assignment Operators
========================================= */

let x = 5; // = is a assign operator
x += 2; // same as x = x + 2
x++; // same as x + 1

/* =========================================
	Comparing Operators (==, ===, <, >, !=, !==)
	Logical Operators (&&, ||, !)
========================================= */

let y = 5;
console.log(y === "5");

let media = 8;
let frequencia = 80;

console.log(media >- 7 && frequencia >= 80);

/* =========================================
	Ternary Operator (... ? ... : ...)
========================================= */

let eleitor = (idade >= 16) ? "Pode votar" : "Não pode votar";
console.log(eleitor);

/* =========================================
	Conditionals (If, Else, Else If, Switch)
========================================= */

let pais = "Brasil";
let estado = "BA";

if(pais == "Brasil") {
	console.log("Sou brasileiro!");
} else if(estado == "BA") {
	console.log("Sou baiano!");
} else {
	console.log("Sou gringo!");
};

switch(pais) {
	case "Brasil":
		console.log("Sim, Brasil!");
		break;

	case "Canadá":
		console.log("Sim, Canadá!");
		break;

	default:
		console.log("Padrão.");
		break;
}

/* =========================================
	Loops (For, While)
========================================= */

let paises = document.getElementsByClassName("pais");

for(let i = 0; i < paises.length; i++) {
	console.log(paises[i].textContent);
}

let i = 0;
while(i < paises.length) {
	console.log(paises[i].textContent);
	i++;
}

i = 0;
do {
	console.log(paises[i].textContent);
	i++;
} while(i < paises.length);


/* =========================================
	Other Loops (For In, For Of)
========================================= */

let fruta = { nome: "banana", preco: 9.99, unidades: 1 };
let aparelhos = [ "Celular", "Fone de ouvido", "Microfone" ];

for(let valor in fruta) {
	console.log(fruta[valor]);
}

for(let valor of aparelhos) {
	console.log(valor);
}

/* =========================================
	Functions
========================================= */

function sum(x, y) {
	return x + y;
}

document.getElementById("resultado").textContent = sum(7, 15);

/* =========================================
	User Outputs and Inputs from Window
========================================= */

let frase = prompt("This is a message, insert it below: ");
console.log(frase);

let resp = confirm("Deseja excluir o item?");
alert(resp ? "Item excluído com sucesso!" : "Exclusão cancelada!");
