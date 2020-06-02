const receitas = document.querySelectorAll('.receita')

for(let receita of receitas){

    receita.addEventListener("click", function(){        
        const receitaId = receita.getAttribute('id')
        window.location.href = `/recipe?id=${receitaId}`
    })
}