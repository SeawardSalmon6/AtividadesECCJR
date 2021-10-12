/* =======================================
 ** DOM - Properties and Usability
========================================= */

/* getElementById */
console.log(
	// returns the unique element that the ID represents
	document.getElementById("fruta").innerHTML
);

/* getElementsByClassName */
console.log(
	// returns the object as a array, 'cause we can have multiple elements with a same class
	document.getElementsByClassName("carro")[0]
);

/* getElementByTagName - always returns a HTMLCollection */
console.log(
	document.getElementsByTagName("div")
)

/* querySelector - returns the first element specified */
console.log(
	"querySelector: ", document.querySelector("div"),
	"\nquerySelectorAll: ", document.querySelectorAll("div"), // "." we can search for classes and "#" for ID's
	"\nfutebol-brasileiro: ", document.getElementById("futebol-brasileiro").querySelectorAll(".times") // we can make combinations for make it preciser
)

/* innerHTML - expanded and possibilities */
let paragraph = document.getElementById("np1");
paragraph.innerHTML = "Novo Conteúdo";

/* style property */
paragraph.style.color = "red";
paragraph.style.backgroundColor = "#333"
paragraph.style.height = "400px"

/* Manipulating elements and attributes from JS */
let imagem = document.getElementById("imagem")
imagem.src = "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
imagem.alt = "Image test";
imagem.width = "120"

/* createElement */
console.log(
	document.createElement("div")
)

// using elements as variables
let newImagem = document.createElement("img");
newImagem.src = "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
console.log(newImagem);

let newParagraph = document.createElement("p")
newParagraph.innerHTML = "Novo parágrafo!"
console.log(newImagem, newParagraph);

/* appendChild */
let p = document.createElement("p")
p.innerHTML = "Olá pessoal!"

let img = document.createElement("img")
img.src = "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

// adds a new child
document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

// removes a child
document.getElementById("conteudo").removeChild(p)

/* First and Last Elements */
console.log(
	"lastChild: ", document.documentElement.lastChild, // gets the last child using as parameter the closing tag,
	"\nfirstChild: ", document.documentElement.firstChild // gets the first child
)
