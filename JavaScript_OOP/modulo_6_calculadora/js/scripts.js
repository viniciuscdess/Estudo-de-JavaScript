class Calculator {

    constructor() {
        this.upperValue = document.querySelector("#upper-number"); //pegando os valores(numero de cima, antes de sair o resultado)
        this.resultValue = document.querySelector("#result-number");
        this.reset = 0; //quando resetar a operação
    }

    checkLastDigit(input, upperValue, reg) {
        if ((!reg.test(input) && !reg.test(upperValue.substr(upperValue.length - 1)))) {
            return true;
        } else {
            return false;
        }
    }

    clearValues() { //resetando o visor e o resultado calculadora
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';
    }

    //método de soma
    sum(n1, n2) {
        return parseFloat(n1) + parseFloat(n2);
    }

    //método de subtração
    substraction(n1, n2) {
        return parseFloat(n1) - parseFloat(n2);
    }

    multiplication(n1, n2) {
        return parseFloat(n1) * parseFloat(n2);
    }

    division(n1, n2) {
        return parseFloat(n1) / parseFloat(n2);
    }

    //atualiza valores
    refreshValues(total) {
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
    }

    //resolve a operação
    resolution() {
        let upperValueArray = (this.upperValue.textContent).split(" "); //criando um array separando por " "

        let result = 0;

        for (let i = 0; i <= upperValueArray.length; i++) {

            let operation = 0; //variavel para decter se alguma operaçãi foi feita
            let actualItem = upperValueArray[i];

            if (actualItem == "x") { //multiplica
                result = calc.multiplication(upperValueArray[i - 1], upperValueArray[i + 1]); //transformando o resultado em numero
                operation = 1;
            } else if(actualItem == "/") { //divide
                result = calc.division(upperValueArray[i - 1], upperValueArray[i + 1]);
                operation = 1;
            } //chega se o array nao tem multiplicação e divisão
            else if(!upperValueArray.includes('x') && !upperValueArray.includes('/')){
                if(actualItem == "+") {
                    result = calc.sum(upperValueArray[i - 1], upperValueArray[i + 1]);
                     operation = 1;
                } else if(actualItem == "-") {
                    result = calc.substraction(upperValueArray[i - 1], upperValueArray[i + 1]);
                     operation = 1;
                }
            }

            //atualiza valores do array para a proxima iteração
            if(operation) {
                //indice anterior no resultado da operação
                upperValueArray[i - 1] = result;
                //remove os itens ja ultilizados para a operação
                upperValueArray.splice(i,2); //removendo dois elementos posteriores do indice
                //zerando o valor do indice
                i = 0;
            }
        }

        if (result) {
            calc.reset = 1;
        }

        //atualizar os totais
        calc.refreshValues(result);
    }

    btnPress() {
        let input = this.textContent; //this.textContent = texto que tem dentro do botão
        let upperValue = calc.upperValue.textContent; //pegando o upperValue(contruct)

        // verificar se tem só números
        var reg = new RegExp('^\\d+$');

        //se precisar resetar, limpa o display
        if (calc.reset && reg.test(input)) {
            upperValue = '0';
        }

        //limpa a prop de reset
        calc.reset = 0;

        //checa se precisa adicionar ou nao (evitando duplicação de simbolos)
        if (input == 'AC') {
            calc.clearValues();
        } else if (input == "=") {
            calc.resolution();
        } else {
            if (calc.checkLastDigit(input, upperValue, reg)) {
                return false;
            }

            //adiciona espaçoes aos operadores
            if (!reg.test(input)) {
                input = ` ${input} `; //se nao for um numero separa por um espaço?
            }

            if (upperValue == "0") {
                if (reg.test(input)) {
                    calc.upperValue.textContent = input;
                }
            } else {
                calc.upperValue.textContent += input;
            }
        }
    }

}

let calc = new Calculator();

//start btns
let buttons = document.querySelectorAll('.btn');

//map all butons
for (let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', calc.btnPress);
}