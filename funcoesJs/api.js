'use strict'

const API = "https://lion-school-phbo.onrender.com";


export async function buscarCursos() {

    const resposta = await fetch(`${API}/cursos`);

    const cursos = await resposta.json();

    return cursos;
}

export async function buscarAlunos(cursoId, status) {

    let url = `${API}/alunos`;

    const filtros = [];


    if(cursoId){
        filtros.push(`curso_id=${cursoId}`);
    }


    if(status){
        filtros.push(`status=${status}`);
    }


    if(filtros.length){
        url += `?${filtros.join("&")}`;
    }


    const resposta = await fetch(url);

    return await resposta.json();

}