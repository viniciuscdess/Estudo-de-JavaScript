//adicionando propriedades fora do objeto

let carro = {
	tipo:'suv',
}

carro.portas = 4;

console.log(carro);

if(carro.tipo == 'suv'){
	carro.tetoSolar = true;
}

console.log(carro);

carro.acelerar = function() {
	console.log("vruuumm");
}

carro.acelerar();