function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype.cor = 'preto';
Carro.prototype.calota = false;

let fusca = new Carro("VW", 10000);

if(fusca.hasOwnProperty('calota')){
	console.log(' A propriedade é do objeto !');
}else if(fusca.constructor.prototype.hasOwnProperty('calota')) {
	console.log('A propriedade é do prototype!');
}else {
	console.log('A propriedade não é de nenhum lugar!');
}

