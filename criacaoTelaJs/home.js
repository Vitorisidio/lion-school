'use strict'

import { buscarCursos } from "../funcoesJs/api.js";

export async function criarHome(trocarTela) {

    const main = document.querySelector("main")

    const home = document.createElement("div")
    home.classList.add("main-home")

    const cursos = await buscarCursos()

    home.append(
        criarMainEsquerdo(),
        criarEstudante(),
        criarMainDireito(trocarTela, cursos)
    )


    main.append(home)

}

function criarMainEsquerdo() {

    const div = document.createElement("div")
    div.classList.add("main-esquerdo")

    const titulo = document.createElement("p")
    titulo.classList.add("titulo")

    const textoInicial = document.createTextNode("Escolha um ")

    const curso = document.createElement("span")
    curso.textContent = "curso"

    const textoFinal = document.createTextNode(" para gerenciar")

    titulo.append(
        textoInicial,
        curso,
        textoFinal
    )

    const computadores = document.createElement("img")
    computadores.classList.add("computadores")
    computadores.src = "img/devices.png"
    computadores.alt = "computadores"

    div.append(
        titulo,
        computadores
    )

    return div
}

function criarEstudante() {

    const estudante = document.createElement("img")

    estudante.classList.add("estudante")
    estudante.src = "img/studant.png"
    estudante.alt = "estudante"

    return estudante
}

function criarMainDireito(trocarTela, cursos) {

    const div = document.createElement("div")
    div.classList.add("main-direito")

    cursos.forEach(curso => {

        div.append(
            criarBotao(
                curso.icon,
                curso.sigla,
                () => trocarTela("turma", curso.id, curso.nome)
            )
        )

    })

    return div
}

function criarBotao(imagem, texto, acao) {

    const botao = document.createElement("button")
    botao.type = "button"

    const img = document.createElement("img")
    img.src = imagem
    img.alt = texto

    const p = document.createElement("p")
    p.textContent = texto

    botao.append(img, p)

    botao.addEventListener("click", acao)

    return botao
}