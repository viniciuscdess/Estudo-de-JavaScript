
let calculadora  = {
	numeros: 0,
	somar(a,b) {
		this.numeros = a + b;
	},
	subtracao(a) {
		this.numeros -= a;
	}
}

calculadora.somar(2,4);
console.log(calculadora.numeros);

calculadora.subtracao(3);
console.log(calculadora.numeros);