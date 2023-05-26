module.exports = function errorHelpers(){
    const erros = []

if(!req.body.nome || typeof req.body.nome ==undefined || req.body.nome ==null){
    erros.push({texto: 'Nome invalido'})
}
if(req.body.nome.length <5){
    erros.push({texto: 'informe um nome maior ou igual a 5 caracteres'})
}
if(!req.body.usuario || typeof req.body.usuario == undefined || req.body.usuario == null){
    erros.push({texto: 'Usuário Invalido'})
}
if(req.body.usuario.length <5){
    erros.push({texto: 'informe um usuário maior ou igual a 5 caracteres'})
}
if(!req.body.password || typeof req.body.password == undefined || req.body.password == null){
    erros.push({texto: 'Senha Invalida'})
}
if(erros.length > 0){
    res
}
}