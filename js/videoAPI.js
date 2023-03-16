// descricao: "3 mil visualizações"
// id: 1
// imagem: "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true"
// titulo: "Conhecendo a linguagem Go | Hipsters.Talks"
// url: "https://www.youtube.com/embed/y8FeZMv37WU"

async function obterVideos() {
    const request = await fetch('http://localhost:3000/video');
    const listaVideos = await request.json();

    return listaVideos;
}

async function criaVideos(titulo, descricao, url, imagem) {
    const postVideo = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if (!postVideo.ok)
        throw new Error('Não foi possível enviar o video!');

    const response = await postVideo.json();
    return response;
}

async function buscaVideo(pesquisa) {
    const getVideo = await fetch(`http://localhost:3000/videos?q=${pesquisa}`);
    const response = await getVideo.json();
    return response;
}

export const conectaApi = {
    obterVideos,
    criaVideos,
    buscaVideo
}