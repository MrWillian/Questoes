$(function() {
    var selectedNivel;

    $("select.nivel").change(function(){
        selectedNivel = $(this).children("option:selected").val();
    });

    $('#form').submit(function(e) {
        e.preventDefault();
        window.location = 'resultado.html?nivel=' + selectedNivel;
    });

    // Insert Clients
    $.ajax({
        url: 'http://localhost:3000/api/client',
        type: 'GET',
        success: function(resultado) {
            console.log('resultado', resultado);
        }
    });

    // Insert Avaliations
    $.ajax({
        url: 'http://localhost:3000/api/avaliation',
        type: 'GET',
        success: function(resultado) {
            console.log('resultado', resultado);
        }
    });
});
