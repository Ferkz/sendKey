const senhas = new Map();

export function gerarSenha(tipo) {
    if (!senhas.has(tipo))
        senhas.set(tipo, {valor: 1})
    return senhas.get(tipo).valor++;
    
}
module.exports = gerarSenha