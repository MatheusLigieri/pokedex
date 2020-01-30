var urlInicio = 'https://pokeapi.co/api/v2/'
var limite;

function buscaInicial() {
    
    var urlfinal = "pokemon"
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlInicio + urlfinal);
    xhr.addEventListener('readystatechange', function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var dado = this.responseText;
                var dadoJSON = JSON.parse(dado);
                limite = dadoJSON.count
                buscaFinal(limite);
            };
        };
    });
    xhr.send();
}
buscaInicial();

function buscaFinal(limite){
    var urlfinal = "pokemon/?limit=" + limite
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlInicio + urlfinal);
    xhr.addEventListener('readystatechange', function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var dado = this.responseText;
                var dadoJSON = JSON.parse(dado);
                var pokemons = dadoJSON.results
                buscaPorPokemon(pokemons);
            };
        };
    });
    xhr.send();
}


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
                    
                    var id = dadoJSON.id;
                    var tipos = dadoJSON.types
                    var tipoNome
                    for (i = 0; i < tipos.length; i++){
                        tipos[i].type.name
                        console.log(tipos[i].type.name)
                        if(tipoNome != undefined){
                            tipoNome = tipoNome + " " + tipos[i].type.name
                        } else {
                            tipoNome = tipos[i].type.name
                        }
                    }

                    var speed = dadoJSON.stats[0].base_stat
                    var spDef = dadoJSON.stats[1].base_stat
                    var spAtq = dadoJSON.stats[2].base_stat
                    var def = dadoJSON.stats[3].base_stat
                    var atq = dadoJSON.stats[4].base_stat
                    var hp = dadoJSON.stats[5].base_stat
                    
                    

                    criaCardPokemon(nomePokemon, imagemPokemon, id, tipoNome, speed, spDef, spAtq, def, atq, hp)
                };
            };
        })
        xhr.send();
    });
}

function criaCardPokemon(nome, urlImagem, numero, tipo, speed, spDef, spAtq, def, atq, hp ) {
    var divPai = document.createElement('div')
    divPai.classList.add("col-xs-12");
    divPai.classList.add("col-sm-4");
    divPai.classList.add("col-md-2");
    divPai.classList.add("col-lg-2");
    divPai.classList.add("text-center");
    divPai.classList.add("pokemonGerado")

    var divFilha = document.createElement('div')
    divFilha.classList.add("pokemon-card");
    divFilha.setAttribute("data-id", numero)
    divFilha.setAttribute("data-tipo", tipo)
    divFilha.setAttribute("data-speed", speed)
    divFilha.setAttribute("data-spDef", spDef)
    divFilha.setAttribute("data-spAtq", spAtq)
    divFilha.setAttribute("data-def", def)
    divFilha.setAttribute("data-atq", atq)
    divFilha.setAttribute("data-hp", hp)

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

