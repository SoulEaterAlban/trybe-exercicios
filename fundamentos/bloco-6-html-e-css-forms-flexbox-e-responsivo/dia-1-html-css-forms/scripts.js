const botao = document.getElementById('btn-submit');

function botaoPrever(event){
    event.preventDefault();
}
botao.addEventListener('click',botaoPrever);