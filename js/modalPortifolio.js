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

// Função para exibir a imagem em tela cheia
function showModal(img) {
    modal.style.display = 'block';
    modalImg.src = img.src;
}

// Fecha a imagem modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Fecha a imagem modal clicando fora dela
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Adiciona evento de clique para cada imagem da galeria
var images = document.querySelectorAll('.gallery img');
images.forEach(function(img) {
    img.addEventListener('click', function() {
        showModal(img);
    });
});

/*
botao menu
*/


