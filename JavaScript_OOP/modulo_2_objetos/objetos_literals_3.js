let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let t = "tipo_de_";

let carro = {
	rodas,
	portas,
	aro,
	tetoSolar,
	bancoDeCouro: true,
	[t+"carro"]:"Sedan",
	ligar() {
		console.log("ligou");
	},
	desligar: function(){
		console.log("desligou");
	}
};

let barco = {
	[t+"barco"]:"Lancha",
};

let aviao = {
	[t+"aviao"]:"Boing"
};

console.log(carro.tipo_de_carro);