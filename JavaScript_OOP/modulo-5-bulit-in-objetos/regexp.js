//expressoes regulares são usadas para encontrar padrões no sistema

let palavra = new RegExp(/at/);//procura onde tem "at" nas palavras

console.log(palavra.test("Bola"));
console.log(palavra.test("Caminhao"));
console.log(palavra.test("Matheus"));


/*
	Este é um regex de email:
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
	console.log(palavra.test("viniciuscdess04@gmail.com"));

 */
