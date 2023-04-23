var modal = document.querySelector('.modal');

// Pega o elemento da imagem modal
var modalImg = document.querySelector('.modal-content');

// Pega o elemento de fechar
var span = document.querySelector('.close');

var modal = document.querySelector('.modal');

// Pega o elemento da imagem modal
var modalImg = document.querySelector('.modal-content');

// Pega o elemento de fechar
var span = document.querySelector('.close');




// Captura a largura disponível da tela
const larguraDisponivel = window.screen.availWidth;


///////////////////////////////////////////////////////////////////////////////

// Função para exibir a imagem em tela cheia
function showModal(img) {
    modal.style.display = 'block';
    modalImg.src = img.src;
    
}

// Fecha a imagem modal
span.onclick = function() {
    modal.style.display = "none";
    linkPadrao()
    
}

// Fecha a imagem modal clicando fora dela
window.onclick = function(event) {
    if (event.target == modal) {
        
        modal.style.display = "none";
        linkPadrao()
    }
}

// Adicionando evento de clique para cada imagem da galeria
//pega o elemmnto imagem
let imagem1 = document.getElementById('img1')
let imagem2 = document.getElementById('img2')
let imagem3 = document.getElementById('img3')


function changeImg(id, imagem){
    // alterar img quando imagem do projeto for clicada
    if (id == 1){
        imagem.src = '/assets/imgs/portifolio/site_ong-animal.jpeg'

    }
    else if (id == 2){
        imagem.src = '/assets/imgs/portifolio/site-service-seo.jpeg'
    }
    else if (id == 3){
        imagem.src = '/assets/imgs/portifolio/site-academia-fitness-pro.jpeg'
    }
}

imagem1.addEventListener('click', () => {
    changeImg(1, imagem1)
    showModal(imagem1)   
})

imagem2.addEventListener('click', () => {
    changeImg(2, imagem2)
    showModal(imagem2)
})

imagem3.addEventListener('click', () => {
    changeImg(3, imagem3)
    showModal(imagem3)
})
/*
var imagem2 = document.getElementById('img2').addEventListener('click', {

});
var imagem3 = document.getElementById('img3').addEventListener('click', {

});*/

//reset link imagem
function linkPadrao(){
    imagem1.src = '/assets/imgs/portifolio/site_ong-animal-1.jpeg'
    imagem2.src = '/assets/imgs/portifolio/site-service-seo-1.jpeg'
    imagem3.src = '/assets/imgs/portifolio/site-academia-fitness-pro-1.jpeg'
}