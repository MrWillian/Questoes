const express = require('express');
var cors = require('cors');

const database = require('./database');
const Client = require('./models/client');
const Avaliation = require('./models/avaliation');

const clientsJson = require('./clientsJson');
const avaliationsJson = require('./avaliationsJson');

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.listen(3000, () => console.log("Servidor listening on port 3000..."));

app.get('/api/client', async (request, response) => {
    await database.sync();
    const clientsToSave = JSON.parse(clientsJson);
    Object.entries(clientsToSave).forEach((client) => {
        Client.create(client[1]);
    });
    return response.status(200).send('Success');
});

app.get('/api/avaliation', async (request, response) => {
    await database.sync();
    const avaliationsToSave = JSON.parse(avaliationsJson);
    Object.entries(avaliationsToSave).forEach((avaliation) => {
        Avaliation.create(avaliation[1]);
    });
    return response.status(200).send('Success');
});

app.get('/api/clients', async (request, response) => {
    await database.sync();
    return response.status(200).json(await Client.findAll());
});

app.get('/api/avaliations', async (request, response) => {
    await database.sync();
    return response.status(200).json(await Avaliation.findAll());
});

app.get('/api/list/:nivel', async (request, response) => {
    await database.sync();
    Avaliation.findAll({
        attributes: ['dataHorario'],
        where: { nivel: request.params.nivel },
        include: [{ model: Client, attributes: ['nome'], required: true }]
    }).then(avaliations => {
        return response.status(200).json(avaliations);
    });
});

app.get('/api/total', async (request, response) => {
    await database.sync();
    const totalAvaliations = Avaliation.findAll().length;
    return response.status(200).json(totalAvaliations);
});
