var urlInicio = 'https://pokeapi.co/api/v2/'

function buscaInicial(func) {
    
    var limite = "pokemon?limit=30"
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlInicio + limite);
    var retorno = xhr.addEventListener('readystatechange', function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var dado = this.responseText;
                var dadoJSON = JSON.parse(dado);
                var pokemons = dadoJSON.results
                func(pokemons);
            };
        };
    });
    xhr.send();
}
buscaInicial(buscaPorPokemon);

function buscaPorPokemon(pokemons){
    pokemons.forEach(function(pokemon) {
        var urlPokemon = pokemon.url;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urlPokemon);
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var dado = xhr.responseText;
                    var dadoJSON = JSON.parse(dado);
                    var nomePokemon = dadoJSON.name;
                    var imagemPokemon = dadoJSON.sprites.front_default;
                    criaCardPokemon(nomePokemon, imagemPokemon)
                };
            };
        })
        xhr.send();
    });
}

function criaCardPokemon(nome, urlImagem) {
    var divPai = document.createElement('div')
    divPai.classList.add("col-xs-12");
    divPai.classList.add("col-sm-4");
    divPai.classList.add("col-md-2");
    divPai.classList.add("col-lg-2");
    divPai.classList.add("text-center");
    divPai.classList.add("pokemonGerado")

    var divFilha = document.createElement('div')
    divFilha.classList.add("pokemon-card");

    var imagemPokemon = document.createElement('img');
    imagemPokemon.setAttribute("src", urlImagem);
    imagemPokemon.setAttribute("alt", "Imagem do pokemon" + nome);

    var nomePokemon = document.createElement('p');
    nomePokemon.textContent = nome;

    divFilha.appendChild(imagemPokemon);
    divFilha.appendChild(nomePokemon);
    divPai.appendChild(divFilha);

    var boxJS = document.querySelector("#boxJS");
    boxJS.appendChild(divPai);
}