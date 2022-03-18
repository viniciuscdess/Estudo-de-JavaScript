function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype = {
	 rodas:4,
	 portas: 4,
	 ligar() {
	 	console.log("ligou");
	 }
};

Carro.prototype.aro = 20;


let bmw = new Carro('bmw',2000);

console.log(bmw);

console.log(bmw.rodas);

console.log(bmw.aro);

bmw.ligar();

let ferrari = new Carro("Ferrari",20000);

Carro.prototype.tetoSolar = true;

Carro.prototype.abrirTetoSolar = function() {
	console.log("Abriu o teto solar");
}

ferrari.abrirTetoSolar();

console.log(ferrari.tetoSolar);
console.log(bmw.tetoSolar);
