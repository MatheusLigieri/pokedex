var types = document.querySelectorAll('.type');
types.forEach(function (type) {
    type.addEventListener('click', function () {
        var typeForFilter = type.className;
        typeForFilter = typeForFilter.replace(' type', '');
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
    if (id == 0 || id < 0 || id > 807){
        alert("Pokemon ainda não descoberto! Tente no maximo 807 ;)")
    }
})
