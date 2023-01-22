/* 

Objetivo 1 - Quando o usuário clicar no botão "Veja o Trailer", devemos abrir a modal com o video do trailer
    Passo 1: Dar um jeito de pegar o elemento que representa o botão na tela usando o js
    Passo 2: Dar uma jeito de indentificar quando o usuario clicar no botão
    Passo 3: Dar um jeito de pegar o elemento da modal no js
    Passo 4: Abrir a modal na tela

Objetivo 2 - Quando o usuário clicar no botão "X", devemos fechar a modal com o video do trailer
    Passo 1: Dar um jeito de pegar o elemento de fechar modal usando js
    Passo 2: Dar um jeito de identificar quando o usuario clicar no X
    Passo 3: Fechar a modal

*/


const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto") 
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})
