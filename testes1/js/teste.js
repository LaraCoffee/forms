function cadastro(){
    var user = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var telefone = document.getElementById("telefone").value;
    var data = document.getElementById("data").value;
    
    if (user.length < 1) {
        alert("usuario não preechido")
    }else if(telefone.length < 1 ){
        alert("telefone não preechido")
    }else if(data.length < 1){
        alert("campo data não preechido")
    }else if (email.length < 1) {
        alert("email não preechido")
    }else if (verificador(email) != true) {
        alert("email incorreto")
    }else if (senha.length < 1){
        alert("senha não preechida")
    }else if (senha.length < 6) {
        alert("A senha deve conter no minimo 6 caracteres");
    }else if (verificadorSenha(senha) != true) {
        alert("senha deve possuir maiuculo, minusculo, numero e caracter special")    
    }else{
        alert("Cadastrado com sucesso");
    }
}


//verifica se tem arroba
function verificador(a){
    const arroba = /@/.test(a)
    if (arroba == true) {
        return true
    }
}
//verifica a senha
function verificadorSenha(a){
    const upper = /[A-Z]/.test(a)
    const lower = /[a-z]/.test(a)
    const number = /[0-9]/.test(a)
    const special = /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\.\\?~]/.test(a)
    if ((upper == true) && (lower == true) && (number == true) && (special == true)){
        return true
    }
}







