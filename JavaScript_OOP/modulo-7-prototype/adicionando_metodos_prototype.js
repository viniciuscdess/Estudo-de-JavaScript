function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype.rodas = 4;
Carro.prototype.ligar  = function() {
	console.log('ligou');
}

let bmw = new Carro('bmw',2000);

console.log(bmw);

console.log(bmw.rodas);

bmw.ligar();