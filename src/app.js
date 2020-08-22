const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validadeRepositoryId(request, response, next) {
    const { id } = request.params

    if (!isUuid(id)) {
        return response.status(400).json({ error: "Invalid repository id." })
    }

    return next()

}

app.use("/repositories/:id", validadeRepositoryId)

app.get("/repositories", (request, response) => {

    return response.json(repositories)
});

app.post("/repositories", (request, response) => {
    const { title, url, techs } = request.body

    const repository = { id: uuid(), title, url, techs, likes: 0 }

    repositories.push(repository)

    return response.json(repository)

});

app.put("/repositories/:id", (request, response) => {
    const { id } = request.params
    const { title, url, techs } = request.body

    const respositoryIndex = repositories.findIndex(index => {
        return index.id === id
    })

    if (respositoryIndex < 0) {
        return response.status(400).json({ error: 'Respository not found.' })
    }

    const repository = {
        id,
        title,
        url,
        techs,
        likes: repositories[respositoryIndex].likes
    }

    repositories[respositoryIndex] = repository

    return response.json(repository)

});

app.delete("/repositories/:id", (request, response) => {
    const { id } = request.params

    const respositoryIndex = repositories.findIndex(index => {
        return index.id === id
    })

    if (respositoryIndex < 0) {
        return response.status(400).json({ error: 'Respository not found.' })
    }

    repositories.splice(respositoryIndex, 1)

    return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
    const { id } = request.params

    const respositoryIndex = repositories.findIndex(index => {
        return index.id === id
    })

    if (respositoryIndex < 0) {
        return response.status(400).json({ error: 'Respository not found.' })
    }

    repositories[respositoryIndex].likes++;

    const respository = repositories[respositoryIndex]

    return response.json(respository)

});

module.exports = app;