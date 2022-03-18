let arr = [1,2,3,,45,6,12,3123,'asd','asd'];

let [a,b, ...c] = arr;

console.log(a,b);
console.log(c); //pega o resto do arr