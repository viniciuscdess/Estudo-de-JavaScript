let equipamentosDoCarro = {
	preco : 10000,
	calota : true,
	cor : 'Azul',
	aro : 16
}

function Carro(marca,preco,cor,aro) {
	this.marca = marca;
}

Carro.prototype = equipamentosDoCarro;

let fusca = new Carro('VW');

console.log(equipamentosDoCarro.isPrototypeOf(fusca));


