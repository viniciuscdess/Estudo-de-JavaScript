function teste1(a) {
	return a;
}

console.log(teste1("Teste1"));

teste2 = new Function(
	'a',
	'return arguments'
);

console.log(teste2("Teste2")[0]);