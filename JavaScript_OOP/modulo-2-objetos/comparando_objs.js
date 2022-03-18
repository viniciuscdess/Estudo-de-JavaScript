// Um objeto só sera igual a outro quando um for referencia do outro

function Ninja(nome, arma) {
	this.nome = nome;
	this.arma = arma;
}

const naruto = new Ninja("naruto", "shiruken");
const rocklee = new Ninja("rocklee", "punhos");

const cloneNaruto = new Ninja("naruto", "shiruken");

const cloneVerdadeiroNaruto = naruto;

console.log(naruto === rocklee);

console.log(naruto === cloneNaruto);

console.log(naruto === cloneVerdadeiroNaruto);

console.log(cloneNaruto === cloneVerdadeiroNaruto);

console.log(naruto.nome === cloneNaruto.nome);

console.log(naruto.nome === cloneVerdadeiroNaruto.nome);
