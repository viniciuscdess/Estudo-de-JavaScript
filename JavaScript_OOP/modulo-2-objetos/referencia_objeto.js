let obj = {
	numero: 1,
}

console.log(obj.numero);

let copia = obj;

console.log(copia.numero);

copia.numero = 5;

console.log(obj.numero);
console.log(copia.numero);

obj.numero = 2;

console.log(obj.numero);
console.log(copia.numero);


