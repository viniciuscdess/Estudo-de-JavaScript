let teste = {
	a:1,
}

let teste2 = {
	a:2,
}

console.log(Object.is(teste,teste2)); //false

console.log(Object.is(NaN, NaN));
console.log(NaN === NaN); //false

console.log(+0 === -0); //true
console.log(Object.is(+0 ,-0));
