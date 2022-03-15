class Calculator {

	constructor() {
		this.upperValue = document.querySelector("#upper-number"); //pegando os valores
		this.resultValue = document.querySelector("#result-number");
		this.reset = 0;
	}

	btnPress() {
		console.log('apertou');
	}
}

let calc = new Calculator();

console.log(calc);

//start btns
let buttons = document.querySelectorAll('.btn');

console.log(buttons);

//map all butons
for(let i = 0; buttons.length > i; i++) {
	buttons[i].addEventListener('click', calc.btnPress);
}
