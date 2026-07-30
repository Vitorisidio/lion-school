'use strict'

import { buscarAlunosID } from "../funcoesJs/api.js";

export async function criarAluno(idAluno) {
    console.log("Entrou na tela aluno", idAluno)
    const main = document.querySelector("main")

    const dadosAluno = await buscarAlunosID(idAluno)

    const aluno = document.createElement("div")
    aluno.classList.add("main-aluno")

    aluno.append(
        criarMainEsquerdo(dadosAluno),
        criarMainDireita(dadosAluno.desempenho)
    )


    main.append(aluno)

}

function criarMainEsquerdo(aluno) {

    const div = document.createElement("div")
    div.classList.add("turma-esquerdo")

    const foto = document.createElement("img")
    foto.classList.add("foto")
    foto.src = aluno.foto
    foto.alt = aluno.nome

    const nome = document.createElement("p")
    nome.classList.add("nome-aluno")
    nome.textContent = aluno.nome



    div.append(
        foto,
        nome
    )

    return div
}

function criarMainDireita(desempenho) {

    const div = document.createElement("div")
    div.classList.add("grafico")

    desempenho.forEach(item => {

        const coluna = document.createElement("div")
        coluna.classList.add("coluna-grafico")

        const porcentagem = document.createElement("p")
        porcentagem.classList.add("porcentagem")
        porcentagem.textContent = `${item.valor}`

        const barra = document.createElement("div")
        barra.classList.add("barra")


        const preenchimento = document.createElement("div")
        preenchimento.classList.add("preenchimento")


        preenchimento.style.height = `${item.valor}%`


        const categoria = document.createElement("p")
        categoria.classList.add("categoria")
        categoria.textContent = item.categoria

        if (item.valor < 75) {
            preenchimento.classList.add("preenchimento-amarelo")
            porcentagem.classList.add("porcentagem-amarelo")
        } 
        if (item.valor < 50) {
            preenchimento.classList.add("preenchimento-vermelho")
            porcentagem.classList.add("porcentagem-vermelho")
        }

        barra.append(
            preenchimento
        )

        coluna.append(
            porcentagem,
            barra,
            categoria
        )


        div.append(
            coluna
        )
    })



    return div
}