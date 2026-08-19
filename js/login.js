function mostrarCadastro() {
    document.getElementById('Login').style.display = 'none';
    document.getElementById('Cadastro').style.display = 'block';
}

function mostrarLogin() {
    document.getElementById('Cadastro').style.display = 'none';
    document.getElementById('Login').style.display = 'block';
}


    const formCadastro = document.getElementById('form-cadastro');

    formCadastro.addEventListener('submit', function() {

        
        const nome = document.getElementById('cad-nome').value;
        const email = document.getElementById('cad-email').value;
        const senha = document.getElementById('cad-senha').value;

        if(nome == ""){
            document.getElementById('erro-nome').textContent = "Informe o nome.";
            document.getElementById('cad-nome').style.border = "2px solid red";
            return;
        }

        if(email == ""){
            document.getElementById('erro-email').textContent = "Informe o e-mail.";
            document.getElementById('cad-email').style.border = "2px solid red";
            return;
        }

        if(!email.includes("@")){
            document.getElementById('erro-email').textContent = "E-mail inválido.";
            document.getElementById('cad-email').style.border = "2px solid red";
            return;
        }

        if(senha.length < 6){
            document.getElementById('erro-senha').textContent = "A senha deve ter pelo menos 6 caracteres.";
            document.getElementById('erroInput-senha').style.border = "2px solid red";
            return;
        }


        const usuario = {
            nome: document.getElementById('cad-nome').value,
            email: document.getElementById('cad-email').value,
            senha: document.getElementById('cad-senha').value
        };


        // localStorage.setItem("chave", "valor");
        localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

        alert("Usuário cadastrado com sucesso!");
        formCadastro.reset();
    });




    function logar() {
        const emailDigitado = document.getElementById('login-email').value;
        const senhaDigitada = document.getElementById('login-senha').value;

        const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioRegistrado'));

        if (usuarioSalvo.email === emailDigitado && usuarioSalvo.senha === senhaDigitada) {
            alert("Bem-vindo(a), " + usuarioSalvo.nome + "!");
            window.location.href = "../index.html";

        } else {
            alert("E-mail ou senha incorretos!");
        }
    };
    

