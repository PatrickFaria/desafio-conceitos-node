# Desafio Conceitos Node.js

## Descrição:

### API desnvolvida com o objetivo de realizar o cadastro de repositórios GIT. Sendo possivel também dar Likes nesses repostórios.

## Rotas:

### GET

#### http://localhost:3333/repositories (Retornar lista com todos os repositórios)

### POST

#### http://localhost:3333/repositories (Adicionar um repositório)

#### http://localhost:3333/repositories/:id/like (Adicionar um like no repositório)

### PUT

#### http://localhost:3333/:id (Atualizar um repositório)

### DELETE

#### http://localhost:3333/:id (Deletar um repositório)

##### Body exemplo:
```javascript
{
        "id": "4a3a31cd-f54f-469d-b84b-3b9be3205297",
        "title": "Patrick",
        "url": "https://github.com/PatrickFaria/desafio-conceitos-node",
        "techs": [
            "Node",
            "Express",
            "TypeScript"
        ],
        "likes": 0
 }
```
