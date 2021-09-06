const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.listen(3000, () => console.log("Servidor listening on port 3000..."));

app.post('/api/result',  async (request, response) => {
    let valorSaque = request.body.valorSaque;
    let cedulas = {
        "nota 50": 0,
        "nota 20": 0,
        "nota 10": 0,
        "nota 05": 0,
        "nota 02": 0,
    };

    if (valorSaque % 5 == 0 || valorSaque % 2 == 0) {
        if (valorSaque >= 50) {
            while (valorSaque >= 50) {
                valorSaque -= 50;
                cedulas["nota 50"]++;
            }
        }

        if (valorSaque >= 20) {
            while (valorSaque >= 20) {
                valorSaque -= 20;
                cedulas["nota 20"]++;
            }
        }

        if (valorSaque >= 10) {
            while (valorSaque >= 10) {
                valorSaque -= 10;
                cedulas["nota 10"]++;
            }
        }
    
        if (valorSaque >= 5) {
            while (valorSaque >= 5) {
                valorSaque -= 5;
                cedulas["nota 05"]++;
            }
        }
    
        if (valorSaque >= 2) {
            while (valorSaque >= 2) {
                valorSaque -= 2;
                cedulas["nota 02"]++;
            }
        }
    }

    return response.status(200).json(cedulas);
});
