const senhas = new Map();

module.exports = function gerarSenha(tipo) {
    if (!senhas.has(tipo))
        senhas.set(tipo, {valor: 1})
    return senhas.get(tipo).valor++;
}