    function logar() {
        const emailDigitado = document.getElementById('login-email').value;
        const senhaDigitada = document.getElementById('login-senha').value;
        
        const funcionarioSalvo = JSON.parse(localStorage.getItem('funcionarios'));

        let encontrou = false;

        if(funcionarioSalvo){
            funcionarioSalvo.forEach(func => {
                if (func.email === emailDigitado && func.senha === senhaDigitada && func.cargo === "Administrador") {
                    encontrou = true;
                }
            });
        }

            if(encontrou){
                alert("Bem-vindo!");
                window.location.href = "admin.html";
            }else{
                alert("E-mail ou senha incorretos, ou você não tem permissão de acesso!");
            }
        
    };


const formAdmin = document.getElementById('formAdmin-produtos');

if(formAdmin){
    formAdmin.onsubmit = function(){

        const nome = document.getElementById('nome-novo').value;
        const preco = document.getElementById('preco-novo').value;
        const img = document.getElementById('img-novo').value;
        const categoria = document.getElementById('categoria-novo').value;
        const destaque = document.getElementById('destaque-novo').value;
        const estoque = document.getElementById('estoque-novo').value;

        if(nome == "" || preco == "" || img == "" || categoria == "" || destaque == "" || estoque == ""){
            alert("Preencha todos os campos para cadastrar um produto.");        
            return
        }

        const novo = {
            nome: document.getElementById('nome-novo').value,
            preco: document.getElementById('preco-novo').value,
            img: document.getElementById('img-novo').value,
            categoria: document.getElementById('categoria-novo').value,
            destaque: document.getElementById('destaque-novo').value,
            estoque: document.getElementById('estoque-novo').value
        };

        // let novosProdutos = []; não funcionou, pois ficava listando só o ultimo produto criado. Então o novosProdutos passa a pegar tudo do localStorage, e só então o const novo é adicionado no fim da lista do novosProdutos. E "|| []" se ainda não existir nenhum "produto" no localStorage, deixa um array vazio mesmo.
        let novosProdutos = JSON.parse(localStorage.getItem('produtos')) || [];
        novosProdutos.push(novo);

        localStorage.setItem('produtos', JSON.stringify(novosProdutos));

        alert("Produto cadastrado com sucesso!");
    };
}




function carregarRelatorioProdutos() {
    const lista = document.getElementById('lista-produtos-localStorage');

    if (!lista) return; 
    
    const novosProdutos = JSON.parse(localStorage.getItem('produtos'));

    lista.innerHTML = "";
    
    if(novosProdutos) {
        novosProdutos.forEach((prod, index) => {
            lista.innerHTML += `
                <div>
                    <img src="${prod.img}" width="40">

                    <p><strong>Nome:</strong> ${prod.nome}</p>
                    <p><strong>Preço:</strong> R$ ${prod.preco}</p>
                    <p><strong>Categoria:</strong> ${prod.categoria}</p>
                    <p><strong>Destaque:</strong> ${prod.destaque}</p>
                    <p><strong>Estoque:</strong> ${prod.estoque}</p>

                    <button onclick="removerProduto(${index})">
                        Remover
                    </button>
                </div>
            `;
        });
    }else{
        lista.innerHTML = "<p>Nenhum produto cadastrado no localStorage.</p>";
    }    
}

function removerProduto(index) {
    let novosProdutos = JSON.parse(localStorage.getItem('produtos'));
    novosProdutos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(novosProdutos));
    carregarRelatorioProdutos();
}

function limparTudo() {
    localStorage.removeItem('produtos');
    carregarRelatorioProdutos();
}


const formFuncionarios = document.getElementById('formAdmin-funcionarios');

if(formFuncionarios){
    formFuncionarios.onsubmit = function(){


        const nomeCompleto = document.getElementById('nomeCompleto-func').value;
        const dataNascimento = document.getElementById('dataNascimento-func').value;
        const email = document.getElementById('email-func').value;
        const senha = document.getElementById('senha-func').value;
        const cargo = document.getElementById('cargo-func').value;

        if(nomeCompleto == "" || dataNascimento == "" || email == "" || senha == "" || cargo == ""){
            alert("Preencha todos os campos para cadastrar um funcionário.");    
            return;    
        }

        const novo = {
            nomeCompleto: document.getElementById('nomeCompleto-func').value,
            dataNascimento: document.getElementById('dataNascimento-func').value,
            email: document.getElementById('email-func').value,
            senha: document.getElementById('senha-func').value,
            cargo: document.getElementById('cargo-func').value
        };

        let novosFuncionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
        novosFuncionarios.push(novo);

        localStorage.setItem('funcionarios', JSON.stringify(novosFuncionarios));

        alert("Funcionário cadastrado com sucesso!");
    };

}



function carregarRelatorioFuncionarios() {
    const lista = document.getElementById('lista-funcionarios-localStorage');

    if (!lista) return; 

    const novosFuncionarios = JSON.parse(localStorage.getItem('funcionarios'));

    lista.innerHTML = "";

    if(novosFuncionarios) {
        novosFuncionarios.forEach((func, index) => {
            lista.innerHTML += `
                <div>
                    <p><strong>Nome:</strong> ${func.nomeCompleto}</p>
                    <p><strong>Data de nascimento:</strong> ${func.dataNascimento}</p>
                    <p><strong>Email:</strong> ${func.email}</p>
                    <p><strong>Cargo:</strong> ${func.cargo}</p>

                    <button onclick="removerFuncionario(${index})">
                        Remover
                    </button>
                </div>
            `;
        });
    }else{
        lista.innerHTML = "<p>Nenhum funcionário cadastrado no localStorage.</p>";
    }    
}

function removerFuncionario(index) {
    let novosFuncionarios = JSON.parse(localStorage.getItem('funcionarios'));
    novosFuncionarios.splice(index, 1);
    localStorage.setItem('funcionarios', JSON.stringify(novosFuncionarios));
    carregarRelatorioFuncionarios();
}

function limparTudoFuncionarios() {
    localStorage.removeItem('funcionarios');
    carregarRelatorioFuncionarios();
}




const formContatos = document.getElementById('form-contatos');

if(formContatos){
    formContatos.onsubmit = function(){

        

        const novo = {
            nome: document.getElementById('nome-contatos').value,
            email: document.getElementById('email-contatos').value,
            assunto: document.getElementById('assunto-contatos').value,
            mensagem: document.getElementById('mensagem-contatos').value
        };

        let novoContato = JSON.parse(localStorage.getItem('contatos')) || [];
        novoContato.push(novo);

        localStorage.setItem('contatos', JSON.stringify(novoContato));

        alert("Mensagem cadastrada com sucesso!");
    };
}




function carregarRelatorioContatos() {
    const lista = document.getElementById('lista-contatos-localStorage');

    if (!lista) return;

    const novosContatos = JSON.parse(localStorage.getItem('contatos'));

    lista.innerHTML = "";

    if(novosContatos) {
        novosContatos.forEach((contato, index) => {
            lista.innerHTML += `
                <div>
                    <p><strong>Nome:</strong> ${contato.nome}</p>
                    <p><strong>Email:</strong> ${contato.email}</p>
                    <p><strong>Assunto:</strong> ${contato.assunto}</p>
                    <p><strong>Mensagem:</strong> ${contato.mensagem}</p>

                    <button onclick="removerContato(${index})">
                        Remover
                    </button>
                </div>
            `;
        });
    }else{
        lista.innerHTML = "<p>Nenhum contato cadastrado no localStorage.</p>";
    }    
}

function removerContato(index) {
    let novosContatos = JSON.parse(localStorage.getItem('contatos'));
    novosContatos.splice(index, 1);
    localStorage.setItem('contatos', JSON.stringify(novosContatos));
    carregarRelatorioContatos();
}

function limparTudoContatos() {
    localStorage.removeItem('contatos');
    carregarRelatorioContatos();
}






   


window.onload = function() {
    carregarRelatorioProdutos();
    carregarRelatorioFuncionarios();
    carregarRelatorioContatos();
}
