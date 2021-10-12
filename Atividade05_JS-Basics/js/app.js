/* ==========================
	** NodeList versus HTMLCollection
		-> HTMLCollection returns an element node
		-> NodeLists returns everything inside of an element or object, like whitespaces and comments
========================== */

/* childNodes */
console.log(
	document.body.childNodes
)

/* Nodes */
let lista = document.body.childNodes
console.log(
	"================================================================",
	"\n lenght: " + lista.length, // array length
	"\n innerHTML: ", lista[41].innerHTML, // returns the inner content
	"\n nodeName: ", lista[41].nodeName, // returns the node name
	"\n nodeType: ", lista[41].nodeType, // returns a 1 (nodeElement), 2 (nodeAttribute), 3 (nodeText) or 8 (comment)
	"\n nodeValue: ", lista[41].childNodes[3].childNodes[0].nodeValue, // returns the value of the node
)
