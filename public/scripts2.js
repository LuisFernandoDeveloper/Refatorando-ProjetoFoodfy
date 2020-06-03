const detalhes = document.querySelectorAll('.detalhes')
const btnE = document.querySelectorAll('.btnE')

for (let i = 0; i < btnE.length; i++) {
    btnE[i].addEventListener("click", function () {
        if (detalhes[i].classList.contains('hide')) {
            detalhes[i].classList.remove('hide')
            btnE[i].innerHTML = "ESCONDER"
        }
        else {
            detalhes[i].classList.add('hide')
            btnE[i].innerHTML = "MOSTRAR"
        }
    })
}