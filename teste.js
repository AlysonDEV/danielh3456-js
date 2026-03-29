
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.json(personagem)
})

app.get('/personagens', (req, res) => {
    res.json(personagens)
})

app.post('/personagem', (req, res) => {
    let dados = req.body

    let personagem = fichaDePersonagem(
        dados.nome,
        dados.idade,
        dados.raca,
        dados.genero
    )

    personagem.atributos = dados.atributos
    personagem.modificadores = calcularPontos(dados.atributos)

    personagens.push(personagem)

    res.json(personagem)

    console.log(req.body)
})

app.listen(3000, () => {
    console.log("servidor rodando porta 3000")
})



let personagens = []

function fichaDePersonagem(nome,idade,raca,genero){

    return {nome,idade,raca,genero}

}

function atributos(forca,destreza,percepcao,inteligencia,resistencia){

    return {forca,destreza,percepcao,inteligencia,resistencia}

}



function calcularPontos(atributosDigi){
    return { 
        forcaCal : Math.floor((atributosDigi.forca - 10) / 2),
        destrezaCal: Math.floor((atributosDigi.destreza - 10) / 2),
        percepcaoCal: Math.floor((atributosDigi.percepcao - 10) / 2),
        inteligenciaCal: Math.floor((atributosDigi.inteligencia - 10) / 2),
        resistenciaCal: Math.floor((atributosDigi.resistencia - 10) / 2)}

}

let personagem = fichaDePersonagem("daniel2", 29, "humano", "m")
let atributoDigitado = atributos(12, 10, 15, 18, 8)
let calResposta = calcularPontos(atributoDigitado)

personagem.atributos = atributoDigitado
personagem.modificadores = calResposta


console.log(personagem)


