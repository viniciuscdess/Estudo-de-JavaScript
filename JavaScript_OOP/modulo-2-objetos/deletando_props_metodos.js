let carro = {
	tipo:'suv',
	ligar() {
		console.log('ligou');
	}
}

console.log(carro.tipo);

delete carro.tipo;
delete carro.ligar;

console.log(carro.tipo);
carro.ligar();

console.log(carro);