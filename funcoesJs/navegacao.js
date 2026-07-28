let trocandoTela = false;

export async function trocarTela(proximaTela, cursoId, cursoNome, aluno) {

    if (trocandoTela) return;

    trocandoTela = true;

    const main = document.querySelector("main");
    main.replaceChildren();

    const textoRetorno = document.querySelector("#retorno-telas .sair");

    try {

        if (proximaTela == "home") {

            const { criarHome } = await import("../criacaoTelaJs/home.js");

            await criarHome(trocarTela);

            if (textoRetorno) {
                textoRetorno.textContent = "Sair";
            }


        } else if (proximaTela == "turma") {

            const { criarTurma } = await import("../criacaoTelaJs/turma.js");

            await criarTurma(cursoId, cursoNome, trocarTela);

            if (textoRetorno) {
                textoRetorno.textContent = "Voltar";
            }

            const retorno = document.getElementById("retorno-telas");

            retorno.onclick = () => trocarTela("home");


        } else if (proximaTela == "detalheAluno") {

            const { criarAluno } = await import("../criacaoTelaJs/aluno.js");

            await criarAluno(aluno);

            if (textoRetorno) {
                textoRetorno.textContent = "Voltar";
            }

            const retorno = document.getElementById("retorno-telas");

            retorno.onclick = () => trocarTela("turma", cursoId, cursoNome);

        }


    } finally {

        trocandoTela = false;

    }
}