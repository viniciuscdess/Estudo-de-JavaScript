class ToDo {
	constructor() {
		this.total = document.querySelectorAll(".task").length; // numero de tarefas que são exibidas
	}

	addTask(taskText) {
		// clona o template (div task);
		let template = document.querySelector(".task").cloneNode(true);

		// remove a classe hide
		template.classList.remove("hide");

		// manipular o texto
		let templateText = template.querySelector(".task-title");
		templateText.textContent = taskText; //tocando os textos

		let list = document.querySelector("#tasks-container");
		// inserir na lista
		list.appendChild(template); // (appendChild) -> método que insere um html em outro

		// adiciona evento as tasks
		this.addEvents();

		this.checkTasks("add");
	}

	// ver a ultima task adicionada e adicionar dois eventos
	addEvents() {
		let removeBtns = document.querySelectorAll(".fa-trash");
		let removeBtn = removeBtns[removeBtns.length - 1]; // acesso ao ultimo botão de remover(lixeira) da lista

		// adiciona evento de remover
		removeBtn.addEventListener("click", function() {
			toDo.removeTask(this); // this se refere ao elemento clicado
		});

		let doneBtns = document.querySelectorAll(".fa-check");
		let doneBtn = doneBtns[doneBtns.length - 1]; // acesso ao ultimo botão de concluido(check) da lista

		// adiciona evento de completar tarefa
		doneBtn.addEventListener("click", function() {
			toDo.completeTask(this);
		});
	}

	// função que remove a task
	removeTask(task) {
		// achar o elemento pai (div task)
		let parentEl = task.parentElement;

		// remove da lista (remove a div(uma tarefa) inteira)
		parentEl.remove();

		this.checkTasks("remove");
	}

	completeTask(task) {
		// adiciona a clase de done
		task.classList.add("done");
	}

	// verifica se tem alguma task, se tiver remove a mensagem(ñ possui tasks)
	checkTasks(command) {
		let msg = document.querySelector("#empty-tasks");

		// logica para adicionar ou remover tasks
		if(command === "add") {
			this.total += 1;
		} else if(command === "remove") {
			this.total -= 1;
		}

		//checa se tem mais de uma task e adiciona ou remove a classe
		if(this.total == 1) {
			msg.classList.remove("hide");
		} else {
			msg.classList.add("hide");
		}
	}
}

let toDo = new ToDo();

// events
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", function(e) {
	e.preventDefault(); // impede que de um submit no formulario quando clicar no botão

	let taskText = document.querySelector("#task");

	if(taskText.value != "") {
		toDo.addTask(taskText.value); // (.value) -> para pegar o valor dentro do input
	}

	//limpa campo de texto(input)
	taskText.value = "";
})
