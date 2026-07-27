'use strict'

import { buscarAlunosID } from "../funcoesJs/api.js";

export async function criarAluno(idAluno) {
console.log("Entrou na tela aluno", idAluno)
    const main = document.querySelector("main")

    const dadosAluno = await buscarAlunosID(idAluno)

    const aluno = document.createElement("div")
    aluno.classList.add("main-aluno")

    aluno.append(
        criarMainEsquerdo(dadosAluno)
    )


    main.append(aluno)

}

function criarMainEsquerdo(aluno){

    const div = document.createElement("div")
    div.classList.add("turma-esquerdo")

    const foto = document.createElement("img")
    foto.classList.add("foto")
    foto.src = aluno.foto
    foto.alt = aluno.nome

        const nome = document.createElement("p")
        nome.classList.add("nome")
        nome.textContent = aluno.nome

    

    div.append(
        foto,
        nome
    )

    return div
}