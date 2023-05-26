const socket = io()
const ultimasChamadas = document.querySelector('#ultimaSenhaNumero')
const senhaAtual = document.querySelector('#senhaAtualNumero')
const prioridadeAtual = document.querySelector('#PrioridadeAtual')
const setor = document.querySelector('#nome-setor')
const senhasLocalStorage = JSON.parse(localStorage.getItem('senhasLocalStore')) || []

socket.on('exibir_senha_painel',({data})=>{
	senhasLocalStorage.push({data})
	const postSenhas = JSON.stringify(senhasLocalStorage)
	localStorage.setItem('senhasLocalStore',postSenhas)
	setor.innerHTML = data.nome
	prioridadeAtual.innerHTML = `Prioridade ${data.tipo}`
	senhaAtual.innerHTML = `Senha ${data.senha}`
	senhas()
	onload = audioSong()
})

 function senhas(){
 	const senhas = senhasLocalStorage.slice(senhasLocalStorage.length -5)
	const senhasTemplate = senhas.map((item) => {
		return `${item.data.nome} Prioridade ${item.data.tipo} Senha ${item.data.senha}</br>`
	}).join('')
	ultimasChamadas.innerHTML = senhasTemplate	
}
senhas() 

socket.on('exibir_novamente',(evento)=>{
	setor.innerHTML = evento.nome
	prioridadeAtual.innerHTML = evento.prioridade
	senhaAtual.innerHTML = evento.senha
})
function audioSong() {
	const audio = document.querySelector('#audio')
	audio.play()
	
}