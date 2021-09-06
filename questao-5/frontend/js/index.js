$(function() {
    let validacao = document.getElementById("valor");
    let resultado = document.getElementById("tabela");
    let imagens = document.createElement('tr');
    imagens.setAttribute("id", "imagens");
    let textos = document.createElement('tr'); 
    textos.setAttribute("id", "textos");

    validacao.addEventListener("input", function (e) {
        e = this.value = this.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    });

    $('#form').submit(function (e) {
        e.preventDefault();
        let valorSaque = $("#valor").val();

        $('#tabela > tr').empty();

        resultado.appendChild(imagens);
        resultado.appendChild(textos);

        $.ajax({
            url: 'http://localhost:3000/api/result',
            type: 'POST',
            data: { valorSaque },
            success: function(result) {
                if (result["nota 50"] > 0) {
                    var td = document.createElement("td");
                    td.innerHTML = `<img src="imagens/cedula-50.png">`;
                    imagens.appendChild(td);
                    resultado.appendChild(imagens);
                    
                    var td = document.createElement("td");
                    td.innerHTML = `${result["nota 50"]} Cédula(s)`;
                    textos.appendChild(td);
                    resultado.append(textos);
                }

                if (result["nota 20"] > 0) {
                    var td = document.createElement("td");
                    td.innerHTML = `<img src="imagens/cedula-20.png">`;
                    imagens.appendChild(td);

                    var td = document.createElement("td");
                    td.innerHTML = `${result["nota 20"]} Cédula(s)`;
                    textos.appendChild(td);
                    resultado.append(textos);
                }
            
                if (result["nota 10"] > 0) {
                    var td = document.createElement("td");
                    td.innerHTML = `<img src="imagens/cedula-10.png">`;
                    imagens.appendChild(td);
                    resultado.appendChild(imagens);

                    var td = document.createElement("td");
                    td.innerHTML = `${result["nota 10"]} Cédula(s)`;
                    textos.appendChild(td);
                    resultado.append(textos);
                }
            
                if (result["nota 05"] > 0) {
                    var td = document.createElement("td");
                    td.innerHTML = `<img src="imagens/cedula-05.png">`;
                    imagens.appendChild(td);
                    resultado.appendChild(imagens);

                    var td = document.createElement("td");
                    td.innerHTML = `${result["nota 05"]} Cédula(s)`;
                    textos.appendChild(td);
                    resultado.append(textos);
                  }
            
                if (result["nota 02"] > 0) {
                    var td = document.createElement("td");
                    td.innerHTML = `<img src="imagens/cedula-02.png">`;
                    imagens.appendChild(td);
                    resultado.appendChild(imagens);

                    var td = document.createElement("td");
                    td.innerHTML = `${result["nota 02"]} Cédula(s)`;
                    textos.appendChild(td);
                    resultado.append(textos);
                }
            }
        });
    });    
});
