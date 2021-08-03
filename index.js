(() =>{
    const calcular = (evento) => {
        evento.preventDefault() //formulario não recarrega página

        //adquire valor do input do peso
        const adquirePeso = document.querySelector('[data-peso]')
        const peso = adquirePeso.value
        
        //adquire valor do input da altura peso
        const adquireAltura = document.querySelector('[data-altura]')
        const altura = adquireAltura.value

        //calcula imc
        const imc = peso/(altura*altura)

        //destaca na tabela
        if (imc <= 18.5){
            //destaca abaixo do peso
            const  linhaTabela = document.querySelector('[data-abaixo]');
            linhaTabela.classList.add("destaque");
        } else if (18.6 <= imc <= 24.9) {
            //destaca peso ideal
            const  linhaTabela = document.querySelector('[data-ideal]');
            linhaTabela.classList.add("destaque");
        } else if (25 <= imc <= 29.9 ){
            //destaca  acima do peso
            const  linhaTabela = document.querySelector('[data-acima]');
            linhaTabela.classList.add("destaque");
        } else if (30 <= imc <= 34.9) {
            //destaca obesidade i
            const  linhaTabela = document.querySelector('[data-obesidade-i]');
            linhaTabela.classList.add("destaque");
        } else if (35 <= imc <= 39.9){
            //destaca obesidade ii
            const  linhaTabela = document.querySelector('[data-obesidade-ii]');
            linhaTabela.classList.add("destaque");
        } else {
            //destaca destaca obesidade iii
            const  linhaTabela = document.querySelector('[data-obesidade-iii]');
            linhaTabela.classList.add("destaque");
        }

        //mostra imc na caixa a direita
        const valorImc = document.querySelector('[data-valor-imc]')
        valorImc.innerHTML = imc.toFixed(2)        
    }

    //escuta botao do fomulário
    const botaoCalcular = document.querySelector('[data-form-button]')
    botaoCalcular.addEventListener ('click', calcular)
})()
