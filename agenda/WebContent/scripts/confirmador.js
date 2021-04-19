/**
 * Confirmador de exclusao de um contato
 *
 * @autor Marcelo Alves Nogueira
 * @param idcon
 */

function confirmar(idcon) {
	let resposta = confirm("Realmente deseja excluir esse contato?");
	if(resposta === true) {
		window.location.href = "delete?idcon="+ idcon
	}
}