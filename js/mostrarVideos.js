import { conectaApi } from './videoAPI.js'

const lista = document.querySelector('[data-lista]');

export default function constroeCards(video) {
    // <li class="videos__item">
    //         <iframe width="100%" height="72%" src="https://www.youtube.com/embed/pA-EgOaF23I"
    //             title="YouTube video player" frameborder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //             allowfullscreen></iframe>
    //         <div class="descricao-video">
    //             <img src="./img/logo.png" alt="logo canal alura">
    //             <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
    //             <p>236 mil visualizações</p>
    //         </div>
    //     </li>
    const li = document.createElement('li');
    li.classList.add('videos__item');

    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '72%';
    iframe.src = video.url;
    iframe.title = video.titulo;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    li.appendChild(iframe);

    const div = document.createElement('div');
    div.classList.add('descricao-video');

    const imagem = document.createElement('img');
    imagem.src = video.imagem;
    imagem.alt = video.titulo;
    div.appendChild(imagem);

    const h3 = document.createElement('h3');
    h3.innerHTML = video.titulo;
    div.appendChild(h3);

    const p = document.createElement('p');
    p.innerHTML = video.descricao;
    div.appendChild(p);

    li.appendChild(div);

    return li;
}

async function listaVideos() {
    try {
        const videos = await conectaApi.obterVideos();

        videos.forEach(video => lista.appendChild(constroeCards(video)));
    }
    catch (error) {
        lista.innerHTML = '<h2 class="mensagem__titulo">Não foi possivel carregar a lista de video</h2>'
    }
}

listaVideos();

