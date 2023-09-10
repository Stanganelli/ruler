//aqui tiro o cadastro do html e faço uma pasta dele para melhor entendimento
function cadastrar() {
//crio as variaveis de acordo com os inputs do usuario
    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
//seto as divs de erro como vazias
    erro_email.innerHTML = "";
    erro_senha.innerHTML = "";
    erro_confirmar_senha.innerHTML = "";

    //verifico se algum dos campos estão vazios
    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        alert("Preencha os campos vazios")

    } else {
        //se nenhum estivesse, aqui verifico se a emailVar não tem @ e se não termina com .com
if (emailVar.indexOf("@") == -1 || emailVar.endsWith(".com") == false) {
//se atender as condições acima exibo
            erro_email.innerHTML = "email inválido"
            input_email.className = "invalido"

//se faltar @
            if (emailVar.indexOf("@") == -1) {

                erro_email.innerHTML = `Está faltando o @`

//se não terminar com .com
            }
            else if (emailVar.endsWith(".com") == false) {

                erro_email.innerHTML = `Está faltando o ".com"`

            }

        }
//se for menor que 6 caracteres
        else if (senhaVar.length < 8) {
            erro_senha.innerHTML = 'Senha inválida!'
            erro_senha.innerHTML += ' Precisa ter ao menos 8 dígitos'
            input_senha.className = 'invalido'

        }

        else if
        //se for diferente
            (confirmacaoSenhaVar != senhaVar) {
            erro_confirmar_senha.innerHTML = `A senha de confirmação não corresponde à senha inserida. Por favor, tente novamente`
            input_confirmar_senha.className = "invalido"

        }
        window.location = 'login.html'
    }
//chamo na usuarios.js o caminho cadastras
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            //decido oq vou "stringifar"
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        })
    })

}