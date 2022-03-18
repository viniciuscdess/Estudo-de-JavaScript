let arr1 = [0,1,2];
let arr2 = new Array(3,4,5);

console.log(arr1);
console.log(arr2);

console.log(arr1.toString());
console.log(arr2.toString());

console.log(arr1 instanceof Array); //os dois nascem do pai array
console.log(arr2 instanceof Array);

console.log(arr1 instanceof Object); //o pai do pai dele é o Object

console.log(Array instanceof Object); //o array nasce do pai Object
//isso chama prototypechain -> uma cadeia de objetos um herdando as propriedades e metodos do outro
