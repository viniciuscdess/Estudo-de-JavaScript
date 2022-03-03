let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);

let c = 12.555;
console.log(Number.parseInt(c)); //transforma um numero quebrado em um inteiro
console.log(parseInt(c)); //transforma um numero quebrado em um inteiro
//parseInt é um metodo do objeto Number, porem nao é necessario chamalo para chamar o metodo

let d = '12.135123';
console.log(Number.parseFloat(d)); //transforma uma string em um numero
console.log(parseFloat(d)); //transforma uma string em um numero
//parseFloat é um metodo do objeto Number, porem nao é necessario chamalo para chamar o metodo
