let carro = {
	portas: 4,
	aro: 20,
	tetoSolar:true,
	banco:'couro',
}

let portas = 0;

console.log(portas);

({portas} = carro); //atribuindo portas a portas do carro (nome da variavel esta igual ao nome da variavel do carro)

console.log(portas);
