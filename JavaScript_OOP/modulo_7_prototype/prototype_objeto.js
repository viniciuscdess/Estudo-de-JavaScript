Array.prototype.chechLenght = function() {
	return this.length;
}

Array.prototype.somaDoisPrimeiros = function() {
	return this[0] + this[1];
}

let a = [1,2,3,4,5];
let b = [1,2,3,4,5,6,7,8];

console.log(a.chechLenght());
console.log(b.chechLenght());

console.log(a.somaDoisPrimeiros());