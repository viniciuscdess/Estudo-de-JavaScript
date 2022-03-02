function criarArvore(especie,temFruto) {
	return {
		especie:especie,
		temFruto: temFruto
	}
}
let laranjeira = criarArvore('laranjeira',true);

// heroi
function Heroi(nome,classe) {
	this.nome = nome;
	this.classe = classe;
}
let jaspion = new Heroi("jaspion","robo");

// objeto
let obj = {
	teste: 'teste'
}

//vendo o pai do objeto
console.log(laranjeira instanceof criarArvore); //falso pq é uma função e a função não é o pai
console.log(laranjeira instanceof Object); //o pai dele é object pq a função esta basicamente retornando um objeto
console.log(jaspion instanceof Heroi); //originado daquele objeto que é uma "classe"
console.log(obj instanceof Object);

let arr = [

];

console.log(arr instanceof Array);

//Todos os tipos de dados vao ser objetos;
