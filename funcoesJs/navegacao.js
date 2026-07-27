export async function trocarTela(proximaTela, cursoId, cursoNome) {

    const main = document.querySelector("main");
    main.replaceChildren();

    const textoRetorno = document.querySelector("#retorno-telas .sair");

    if (proximaTela == "home") {

        const { criarHome } = await import("../criacaoTelaJs/home.js");

        await criarHome(trocarTela);

        if (textoRetorno) {
            textoRetorno.textContent = "Sair";
        }

    } else if (proximaTela == "turma") {

        const { criarTurma } = await import("../criacaoTelaJs/turma.js");

        criarTurma(cursoId, cursoNome);

        if (textoRetorno) {
            textoRetorno.textContent = "Voltar";
        }

        const retorno = document.getElementById("retorno-telas");

        retorno.onclick = () => trocarTela("home");
    }
}