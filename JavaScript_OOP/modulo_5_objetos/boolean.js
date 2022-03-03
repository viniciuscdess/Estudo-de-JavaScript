let a = true;
let b = new Boolean(true);

console.log(a);
console.log(b);

console.log(b.valueOf());
//para tirar o valor do Objeto boolean é preciso usar value of se ele for instanciado com new Boolean

console.log(a instanceof Boolean); //boolean != Boolean