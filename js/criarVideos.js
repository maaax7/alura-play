import { conectaApi } from "./videoAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault();
    var imagem = document.querySelector('[data-imagem]').value;
    var titulo = document.querySelector('[data-titulo]').value;
    var url = document.querySelector('[data-url]').value;
    var descricao = Math.floor(Math.random() * 10).toString();

    url = url.replace('watch?v=', 'embed/').toString();

    try {
        await conectaApi.criaVideos(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";
    }
    catch(error){
        alert(error);
    }
}

formulario.addEventListener('submit', evento => criarVideo(evento));