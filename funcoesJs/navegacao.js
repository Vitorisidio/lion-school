import { criarHome } from "../criacaoTelaJs/home.js";
import { criarTurma } from "../criacaoTelaJs/turma.js";

export function trocarTela(proximaTela) {

    const main = document.querySelector("main");

    main.replaceChildren();

    const textoRetorno = document.querySelector("#retorno-telas .sair");

    if (proximaTela === "home") {
        criarHome();

        if (textoRetorno) {
            textoRetorno.textContent = "Sair";
        }
        
    } else if (proximaTela === "turma") {
        criarTurma();

        if (textoRetorno) {
            textoRetorno.textContent = "Voltar";
        }

        const retorno = document.getElementById("retorno-telas");

        retorno.addEventListener("click", () => {
            trocarTela("home");
        });
    }
}