function Carro(marca,preco,cor,aro) {
	this.marca = marca;
	this.preco = preco;
	this.calota = true;
	this.cor = cor;
	this.aro = aro;
}

let fusca = new Carro('VW', 1000, 'vermelho', 20);

for(prop in fusca) {
	console.log(prop + ' => ' + fusca[prop]);
}
