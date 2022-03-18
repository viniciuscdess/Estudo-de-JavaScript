// Apenas variaveis, e funções então no escopo global (window);
// let e const não
// var não é muito usado por causa do escopo "global"

console.log(window);

var teste = "oi";

console.log(window.teste);

console.log(this.teste);

let teste2 = "oi";

console.log(window.teste2);

function testando() {
	console.log('testando!');
}

window.testando();
