# danielh3456-js

Projeto simples em Node.js + Express com um frontend estático para criar e listar personagens.

**Resumo**
- Servidor: `index.js` (Express) — escuta por padrão na porta `3000`.
- Frontend: `index.html` — formulário que envia `POST /personagem` para o servidor.

**Pré-requisitos**
- Node.js (>= 14)
- npm

## Instalação

1. Instale dependências:

```bash
npm install
```

## Como iniciar

- Iniciar diretamente com Node:

```bash
node index.js
```

- Sugestão (opcional): adicionar script `start` no `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

## Usando o frontend

Abra `index.html` no navegador (duplo clique ou `file://` path) e use o formulário para criar personagens. O formulário faz um `POST` para `http://localhost:3000/personagem`.

## Endpoints

- `GET /` — exibe um personagem de exemplo.
- `GET /personagens` — retorna lista de personagens já criados.
- `POST /personagem` — cria um personagem. Exemplo de payload JSON:

```json
{
  "nome": "Aelin",
  "classe": "Guerreiro",
  "atributos": {
    "forca": 12,
    "destreza": 10,
    "vigor": 8
  }
}
```

Resposta esperada: JSON com a ficha calculada (conforme lógica em `index.js`).

## Testes rápidos (curl)

Criar personagem via curl:

```bash
curl -X POST http://localhost:3000/personagem \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","atributos":{"forca":10,"destreza":8}}'
```

Verificar lista de personagens:

```bash
curl http://localhost:3000/personagens
```

## Sugestões

- Adicionar scripts úteis em `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

- Considerar servir o `index.html` pelo Express para evitar problemas de CORS quando abrir o arquivo localmente.

## Contribuir

Sinta-se à vontade para abrir issues ou pull requests. Para alterações locais: fork, branch, commit e PR.

## Licença

Este repositório não possui uma licença especificada. Adicione um arquivo `LICENSE` se desejar tornar o projeto reutilizável sob termos específicos.
