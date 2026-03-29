
function criarUsuario(nome,senha){

    let usuario = {
        nome,
        senha
    }
    return usuario
}

function login(usuario , nomeDigitado, senhaDigitada){

    if(usuario.nome === nomeDigitado && usuario.senha === senhaDigitada)
        { return `acesso liberado`}else{return `acesso negado`}
}

let user = criarUsuario("daniel", "1234")
console.log(login(user, "daniel", "1234"))
console.log(login(user, "daniel", "100"))
