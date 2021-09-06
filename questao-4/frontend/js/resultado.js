$(function() {
    let searchParams = new URLSearchParams(window.location.search);
    let nivel = searchParams.get('nivel');

    // Get List
    $.ajax({
        url: 'http://localhost:3000/api/list/' + nivel,
        type: 'GET',
        success: function(resultado) {
            list = Object.keys(resultado).map(i => JSON.parse(JSON.stringify(resultado[Number(i)])));

            $.each(list, function(i, item) {
                $("#list-table").find('tbody')
                    .append($('<tr>')
                        .append($('<td>' + item.client.nome.toUpperCase() + '</td>'))
                        .append($('<td>' + new Date(item.dataHorario).toLocaleString() + '</td>'))
                    );
            });
        }
    });
});
