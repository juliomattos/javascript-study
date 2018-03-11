var paciente = document.querySelectorAll('.paciente');

var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener("dblclick", function(event){



if (confirm("Deseja remover esse paciente?")){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function() {

		event.target.parentNode.remove(); //forma simplificado do codigo! 
	
	}, 500);
}

	/*
	<<Entendimento>>
	var alvoEvento = event.target; //codigo para identificar qual campo foi clicado
	console.log(alvoEvento);
	var paiDoAlvo = alvoEvento.parentNode; // parentNode serve para pegar o pai do componente clicado.
	console.log(paiDoAlvo);
	paiDoAlvo.remove();
	*/

	
});




