var urlInicio = 'https://pokeapi.co/api/v2/pokemon'

function buscaInicial() {
    var limite = "?limit=30"
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlInicio + limite);
    xhr.addEventListener('readystatechange', function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var dado = this.responseText;
                var dadoJSON = JSON.parse(dado);
                console.log(dadoJSON)
                var pokemons = dadoJSON.results
                var i = 0;
                pokemons.forEach(function(pokemon) {
                    i++
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
            };
        };
    });
    xhr.send();
}
buscaInicial();

function criaCardPokemon(nome, urlImagem) {
    var divPai = document.createElement('div')
    divPai.classList.add("col-xs-12");
    divPai.classList.add("col-sm-4");
    divPai.classList.add("col-md-2");
    divPai.classList.add("col-lg-2");
    divPai.classList.add("text-center");

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