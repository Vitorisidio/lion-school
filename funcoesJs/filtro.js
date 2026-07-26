'use strict'


export function dropDown(botao) {

    const div = document.createElement("div");
    div.classList.add("dropdown");

    const opcoes = document.createElement("div");
    opcoes.classList.add("opcoes");

    const status = document.createElement("p");
    status.textContent = "status";

    const finalizado = document.createElement("p");
    finalizado.textContent = "Finalizado";

    const cursando = document.createElement("p");
    cursando.textContent = "Cursando";


    opcoes.append(
        status,
        finalizado,
        cursando
    )


    // abre e fecha opções
    botao.addEventListener("click", () => {

        opcoes.classList.toggle("mostrar")

    });
    
    status.addEventListener("click", () => {
        botao.textContent = "Status";
        opcoes.classList.remove("mostrar");
    });

    // troca o texto do botão
    finalizado.addEventListener("click", () => {

        botao.textContent = "Finalizado";

        opcoes.classList.remove("mostrar");

    });


    cursando.addEventListener("click", () => {

        botao.textContent = "Cursando";

        opcoes.classList.remove("mostrar");

    });

    div.append(
        botao,
        opcoes
    );
    
    return div;

}