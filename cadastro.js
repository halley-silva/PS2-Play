let video = document.getElementById("video_1");

video.playbackRate = 0.4;

// Script para verfificar os inputs

let botao = document.getElementById("entrar"); // Criar uma varival pro botão

// Função pra quando o botão for clicado
botao.addEventListener("click", function(){
    let gmail = document.getElementById("email"); // Pegar os inputs
    let senha = document.getElementById("password");

    if (gmail.value === "" && senha.value === "") { // Só vai salvar os valores se os campos não estiverem vazios

        gmail.placeholder = "Campo Vazio !"; // Muldar o placeholder
        senha.placeholder = "Campo Vazio !";

    } else {
        console.log(gmail.value)
        console.log(senha.value)

    };
});

