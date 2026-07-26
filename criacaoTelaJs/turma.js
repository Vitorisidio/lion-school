'use strict'

import { trocarTela } from "../funcoesJs/navegacao.js"
import { dropDown } from "../funcoesJs/filtro.js"


export function criarTurma() {

    const main = document.querySelector("main")


    main.append(
        filtros()
    )

}

function filtros() {

    const div = document.createElement("div")
    div.classList.add("aba-filtros")

    const status = document.createElement("button");
    status.classList.add("status")
    status.textContent = "status";

    const dropdown = dropDown(status);

    const legenda = document.createElement("div");
    legenda.classList.add("legenda")
    legenda.textContent = "LEGENDA";


    const blocoAzul = document.createElement("div");
    blocoAzul.classList.add("bloco", "bloco-azul")

    const cursando = document.createElement("div");
    cursando.classList.add("cursando")
    cursando.textContent = "Cursando";

    const blocoAmarelo = document.createElement("div");
    blocoAmarelo.classList.add("bloco", "bloco-amarelo")
    
    const finalizado = document.createElement("div");
    finalizado.classList.add("finalizado")
    finalizado.textContent = "Finalizado";

    legenda.append(
        blocoAzul,
        cursando,
        blocoAmarelo,
        finalizado
    );

    div.append(
        dropdown,
        legenda
    );

    return div
}

