const produtos = [
    { id: 1, nome: "Whey Protein", preco: 110.00, img: "https://images.pexels.com/photos/36429468/pexels-photo-36429468.png", categoria: "Proteínas", destaque: "Sim", estoque: 30},
    { id: 2, nome: "Albumina", preco: 89.90, img: "https://images.pexels.com/photos/17820729/pexels-photo-17820729.jpeg", categoria: "Proteínas", destaque: "Não", estoque: 6 },
    { id: 3, nome: "Bebida Energética", preco: 8.90, img: "https://images.pexels.com/photos/4386027/pexels-photo-4386027.jpeg", categoria: "Energia", destaque: "Sim", estoque: 30 },
    { id: 4, nome: "Cafeína em Cápsula", preco: 39.90, img: "https://images.pexels.com/photos/4046999/pexels-photo-4046999.jpeg", categoria: "Energia", destaque: "Sim", estoque: 4 },
    { id: 5, nome: "Pasta de Amendoim", preco: 29.90, img: "https://images.pexels.com/photos/5149346/pexels-photo-5149346.jpeg", categoria: "Alimentação", destaque: "Sim", estoque: 50 },
    { id: 6, nome: "Barra de Proteína", preco: 10.90, img: "https://images.pexels.com/photos/13111782/pexels-photo-13111782.jpeg", categoria: "Alimentação", destaque: "Não", estoque: 60 },
    { id: 7, nome: "Aveia em Flocos", preco: 14.90, img: "https://images.pexels.com/photos/8108077/pexels-photo-8108077.jpeg", categoria: "Alimentação", destaque: "Sim", estoque: 70 },
];

// Pega os produtos do localStorage. Depois adiciona na variavel produtoNovo, e produtoNovo é adicionado no fim da lista do produtos
const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos'));


if(produtosLocalStorage){
    produtosLocalStorage.forEach(produtoNovo => {
        produtos.push(produtoNovo);
    });
}


function carregarDestaques() {
    
    const listandoProdutosDestaque = document.getElementById('lista-produtosDestaque');
    if (!listandoProdutosDestaque) return;

    // Percorre cada linha do array e adiciona em prod, depois faz o processo do card.
    produtos.forEach(prod => {

        if(prod.destaque === "Sim" && prod.estoque > 5){
            const card = document.createElement('div');
            card.className = 'produto-card';
            
            card.innerHTML = `
                <div class="container-foto">
                    <img src="${prod.img}" alt="${prod.nome}">
                </div>
                <div class="container-conteudo">
                    <h3>${prod.nome}</h3>
                    <p>${prod.categoria}</p>
                    <p class="preco">R$ ${prod.preco}</p>
                </div>
                <div class="button-container">
                    <a class="button-card" href="../paginas/detalhesProduto.html">Comprar Agora</a>
                </div>

                    `;
            listandoProdutosDestaque.appendChild(card);

        }
        
    });
}



function carregarProdutos() {
    const listandoProdutos = document.getElementById('lista-produtos');
    if (!listandoProdutos) return;

    listandoProdutos.innerHTML = "";

    // Percorre cada linha do array e adiciona em prod, depois faz o processo do card.
    produtos.forEach(prod => {

        if(categoriaSelecionada === "Todos" || prod.categoria === categoriaSelecionada){
            if(prod.estoque >= 5){
                const card = document.createElement('div');
                card.className = 'produto-card';
                
                card.innerHTML = `
                <div class="container-foto">
                    <img src="${prod.img}" alt="${prod.nome}">
                </div>
                <div class="container-conteudo">
                    <h3>${prod.nome}</h3>
                    <p>${prod.categoria}</p>
                    <p class="preco">R$ ${prod.preco}</p>
                </div>
                <div class="button-container">
                    <a class="button-card" href="../paginas/detalhesProduto.html">Comprar Agora</a>
                </div>

                    `;

                listandoProdutos.appendChild(card);
            }else{
                const card = document.createElement('div');
                card.className = 'produto-card';
            card.innerHTML = `
                <div class="faixa-ultimas-unidades">
                    Últimas Unidades!
                </div>

                <div class="container-foto">
                    <img src="${prod.img}" alt="${prod.nome}">
                </div>
                <div class="container-conteudo">
                    <h3>${prod.nome}</h3>
                    <p>${prod.categoria}</p>
                    <p class="preco">R$ ${prod.preco}</p>
                </div>
                <div class="button-container">
                    <a class="button-card" href="../paginas/detalhesProduto.html">Comprar Agora</a>
                </div>
            `;
                listandoProdutos.appendChild(card);
            }
        }
        
        
    });
}

let categoriaSelecionada = "Todos";
function filtrarCategoria(categoria){
    categoriaSelecionada = categoria;
    carregarProdutos();
}


window.onload = function() {
    carregarDestaques();
    carregarProdutos();
}
