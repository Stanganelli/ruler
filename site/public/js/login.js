function verificar(){
    //verifico se os campos estão preenchidos
    //tinha errado o nome das váriaveis e agora estou arrumando
    var emailVar = email_input.value
    var senhaVar = senha_input.value
    if(emailVar == "" || senhaVar == ""){
        alert('preencha todos os campos')
    } 
    //chamo na usuarios.js o caminho autenticar
fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    //seto no session storage as informações do usuario 
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    //erro corrigido abaixo, cujo demorou a semana toda de testes, erros, mudanças no bd, para no final ter sido um erro de sintaxe
                    sessionStorage.ID_USUARIO = json.idUsuario;

                    setTimeout(function () {
                        //aqui estava erroneamento encaminhando para a home ao invés da tela de escolha
                        window.location = "mp_sp.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    //finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
}