import { conectaApi } from "./videoAPI.js";
import constroeCards from "./mostrarVideos.js";

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');

botaoPesquisa.addEventListener('click', evento => buscaVideo(evento));

async function buscaVideo(evento) {
    evento.preventDefault();
    const busca = document.querySelector('[data-busca]').value;
    const responseBusca = await conectaApi.buscaVideo(busca);

    var lista = document.querySelector('[data-lista]');
    
    while (lista.firstChild)
        lista.removeChild(lista.firstChild);

    responseBusca.forEach(video => lista.appendChild(constroeCards(video)));
    
    if(responseBusca.length === 0)
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`;    
}