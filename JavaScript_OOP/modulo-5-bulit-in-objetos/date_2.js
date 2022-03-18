let data = new Date();

console.log(data);

console.log(data.setMonth(2)); //mudando o mes , para o mes 2(março) em timestamp
console.log(new Date(data.setMonth(2))); //mudando o mes , para o mes 2(março), de uma forma legivel

console.log(Date.now()); //data de agora em timestamp

console.log(Date.parse(data)); //transformando uma data normal em timestamp
