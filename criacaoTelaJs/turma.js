'use strict'

import { buscarAlunos } from "../funcoesJs/api.js";

export async function criarTurma(cursoId, curso, trocarTela) {

    const main = document.querySelector("main")

    const alunos = await buscarAlunos(cursoId);

    main.append(
        await filtros(atualizarCards),
        tituloTurma(curso),
        cardAluno(alunos, trocarTela, cursoId, curso)
    )

    async function atualizarCards(status) {

        const alunosFiltrados = await buscarAlunos(cursoId, status)


        const lista = document.querySelector(".lista-alunos")


        lista.replaceWith(
            cardAluno(alunosFiltrados)
        )

    }


}

async function filtros(callback) {

    const div = document.createElement("div")
    div.classList.add("aba-filtros")

    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    const status = document.createElement("button");
    status.classList.add("status")
    status.textContent = "status"

    dropdown.append(status)

    try {

        const { dropDown } = await import("../funcoesJs/filtro.js")

        dropDown(
            dropdown,
            status,
            callback
        )

    } catch (erro) {

        console.log("Filtro não carregado")

    }

    const legenda = document.createElement("div");
    legenda.classList.add("legenda")
    legenda.textContent = "LEGENDA"

    const blocoAzul = document.createElement("div")
    blocoAzul.classList.add("bloco", "bloco-azul")

    const cursando = document.createElement("div")
    cursando.classList.add("cursando")
    cursando.textContent = "Cursando"

    const blocoAmarelo = document.createElement("div")
    blocoAmarelo.classList.add("bloco", "bloco-amarelo")

    const finalizado = document.createElement("div")
    finalizado.classList.add("finalizado")
    finalizado.textContent = "Finalizado"

    legenda.append(
        blocoAzul,
        cursando,
        blocoAmarelo,
        finalizado
    )

    div.append(
        dropdown,
        legenda,
    )

    return div
}

function tituloTurma(curso) {

    const tituloTurma = document.createElement("h1");
    tituloTurma.classList.add("tituloTurma")
    tituloTurma.textContent = curso

    return tituloTurma

}

function cardAluno(alunos, trocarTela, cursoId, cursoNome) {

    const container = document.createElement("div")
    container.classList.add("lista-alunos")


    alunos.forEach(aluno => {


        const card = document.createElement("div")
        card.classList.add("cardAluno")

        card.addEventListener("click", () => {

    trocarTela(
        "detalheAluno",
        cursoId,
        cursoNome,
        aluno
    )

})

        if (aluno.status == "finalizado") {
            card.classList.add("curso-finalizado")
        }

        const foto = document.createElement("img")
        foto.classList.add("foto-aluno")
        foto.src = aluno.foto
        foto.alt = aluno.nome;


        const nome = document.createElement("p")
        nome.classList.add("nome")
        nome.textContent = aluno.nome


        card.append(
            foto,
            nome
        )


        container.append(card)

    })


    return container
}
