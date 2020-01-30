// function buscaID(numero) {
//     var url = "pokemon/" + numero
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET', urlInicio + url)
//     var retorno = xhr.addEventListener("readystatechange", function () {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 //console.log("entrei id")
//                 var dado = xhr.responseText
//                 //console.log(dado)
//                 var dadoJSON = JSON.parse(dado)
//                 //console.log(dadoJSON)
//                 var nomePokemon = dadoJSON.name;
//                 var imagemPokemon = dadoJSON.sprites.front_default;
                
//                 criaCardPokemon(nomePokemon, imagemPokemon)
//             }
//         }
//     })
//     xhr.send()
// }


