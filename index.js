(() =>{
    const calcular = (evento) => {
        evento.preventDefault()

        const adquirePeso = document.querySelector('[data-peso]')
        const peso = adquirePeso.value
        
        const adquireAltura = document.querySelector('[data-altura]')
        const altura = adquireAltura.value

        const imc = peso/(altura*altura)

        const valorImc = document.querySelector('[data-valor-imc]')
        valorImc.innerHTML = imc.toFixed(2)

        if (imc <= 18.5){
            const  linhaTabela = document.querySelector('[data-abaixo]');
            linhaTabela.classList.add("destaque");
        } else if (18.6 <= imc <= 24.9) {
            const  linhaTabela = document.querySelector('[data-ideal]');
            linhaTabela.classList.add("destaque");
        } else if (25 <= imc <= 29.9 ){
            const  linhaTabela = document.querySelector('[data-acima]');
            linhaTabela.classList.add("destaque");
        } else if (30 <= imc <= 34.9) {
            const  linhaTabela = document.querySelector('[data-obesidade-i]');
            linhaTabela.classList.add("destaque");
        } else if (35 <= imc <= 39.9){
            const  linhaTabela = document.querySelector('[data-obesidade-ii]');
            linhaTabela.classList.add("destaque");
        } else {
            const  linhaTabela = document.querySelector('[data-ob]');
            linhaTabela.classList.add("destaque");
        }
    }

    const botaoCalcular = document.querySelector('[data-form-button]')
    botaoCalcular.addEventListener ('click', calcular)
})()
