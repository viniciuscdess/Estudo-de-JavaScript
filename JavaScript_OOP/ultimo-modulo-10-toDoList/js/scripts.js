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
