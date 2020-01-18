function BuscaPorTipos(type) {
    
    var urlPorTipo = "type/"
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlInicio + urlPorTipo);
    var retorno = xhr.addEventListener('readystatechange', function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var dado = this.responseText;
                var dadoJSON = JSON.parse(dado);
                var tipos = dadoJSON.results
                
                tipos.forEach(function(tipo){
                    if (type == tipo.name){ 
                        var urlTipo = tipo.url
                        console.log(urlTipo) 
                        var xhr = new XMLHttpRequest()
                        xhr.open("GET", urlTipo)
                        xhr.addEventListener("readystatechange", function(){
                            if (this.readyState == 4) {
                                if (this.status == 200){
                                    var dado = xhr.responseText                                    
                                    var dadoJSON = JSON.parse(dado)
                                    var pokemonTipo = dadoJSON.pokemon;
                                    
                                    pokemonTipo.forEach(function(pokemon) {
                                        var urlPokemon = pokemon.pokemon.url
                                        console.log(urlPokemon)
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
                                    })


                                }
                       
                            }
                        })
                        xhr.send()
                    }
                });
            };
        };
    });
    xhr.send();
}








