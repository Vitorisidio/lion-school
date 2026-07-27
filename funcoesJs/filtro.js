'use strict'


export function dropDown(dropdown, botao, alterarFiltro) {


    const opcoes = document.createElement("div");
    opcoes.classList.add("opcoes")

    const todos = document.createElement("p");
    todos.textContent = "Todos"

    const finalizado = document.createElement("p");
    finalizado.textContent = "Finalizado"

    const cursando = document.createElement("p");
    cursando.textContent = "Cursando"


    opcoes.append(
        todos,
        finalizado,
        cursando
    )

    dropdown.append(opcoes)

    // abre e fecha opções

    botao.addEventListener("click", () => {

        opcoes.classList.toggle("mostrar")

    })

    // troca o texto do botão

    todos.addEventListener("click", () => {

        botao.textContent = "Todos"

        alterarFiltro(null)

        opcoes.classList.remove("mostrar")

    })

    finalizado.addEventListener("click", () => {

        botao.textContent = "Finalizado"

        alterarFiltro("finalizado");

        opcoes.classList.remove("mostrar")

    })


    cursando.addEventListener("click", () => {

        botao.textContent = "Cursando"

        alterarFiltro("cursando");

        opcoes.classList.remove("mostrar")

    })


}