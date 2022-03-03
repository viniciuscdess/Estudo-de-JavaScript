let obj1 = {}; //criando um objeto

let obj2 = new Object(); //criando um objeto

console.log(obj1);
console.log(obj2);

obj1.nome = "vinicius";
obj2.nome = "joao";

console.log(obj1.valueOf()); //retorna oq tem dentro do objeto
console.log(obj2.valueOf());

console.log(obj1.toString()); //representação do objeto em string
console.log(obj2.toString());