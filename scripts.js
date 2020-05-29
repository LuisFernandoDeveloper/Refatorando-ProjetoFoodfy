const modalOverlay = document.querySelector('.modal-overlay')
const receitas2 = document.querySelectorAll('.receita')
const modal = document.querySelector('.modal');

for(let receita of receitas2){

    const image_id = receita.getAttribute("id")

    receita.addEventListener("click", function(){        
        modal.querySelector('img').src = `img/${image_id}`
        modal.querySelector("h2").innerText = receita.querySelector('h4').innerText
        modal.querySelector("p").innerText = receita.querySelector("p").innerText
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})