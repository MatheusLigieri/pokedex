var types = document.querySelectorAll('.type');
types.forEach(function (type) {
    type.addEventListener('click', function () {
        var typeForFilter = type.className;
        typeForFilter = typeForFilter.replace(' type', '');
        var urlPorTipo = "type/"
        console.log(typeForFilter)
        // limpaBox()
        // BuscaPorTipos(typeForFilter)
    })
});

var stats = document.querySelectorAll('.stats');
stats.forEach(function (stats) {
    stats.addEventListener('click', function () {
        var statsForFilter = stats.className;
        statsForFilter = statsForFilter.replace(' stats', '');
        console.log(statsForFilter)
    })
});

var form = document.querySelector('form');
var inputID = document.querySelector('.buscaID form input');
form.addEventListener('submit', function(e){
    e.preventDefault()
    var id = inputID.value
    if (id == 0 || id < 0 || id > limite){
        alert("Pokemon ainda não descoberto! Tente no maximo " + limite);
    } else {
        // limpaBox()
        // buscaID(id)
    }

})
//  function limpaBox(){
//      var boxJS = document.querySelector("#boxJS")
//      var filhos = document.querySelectorAll(".pokemonGerado")
//      filhos.forEach(function(filho){
//         boxJS.removeChild(filho)

//      })
//      return
//  }

 