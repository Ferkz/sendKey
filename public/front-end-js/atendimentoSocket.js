const socket = io()
const prioridades = document.querySelectorAll('.prioridade')
const btn = document.querySelectorAll('.btn')
const nome = document.querySelector('#nome-usuario').textContent
btn.forEach((b)=>{
  b.addEventListener('click',()=>{
    const t = b.dataset.tipo
    const tipo = t.charAt(0).toUpperCase() + t.slice(1)
    const senha = b.dataset.senha
    const data =
    {
      nome:nome,
      tipo: tipo,
      senha: senha
    }
      socket.emit('enviar_senha',({data}))
  })
})

socket.on('atualizar',()=>{
  window.location.reload
})