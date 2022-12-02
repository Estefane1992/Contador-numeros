function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pulando = document.getElementById('pulando') 
    let resposta = document.getElementById('resposta')
    if (inicio.value.length == 0 || fim.value.length == 0 || pulando.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        resposta.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pulando.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        if (i < f) {
            // contagem crescente
            for( let contador = i; contador <= f; contador += p) {
                resposta.innerHTML += `${contador} \u{1F449}`
        
            }
           
        } else {
            //contagem regressiva
            for(let contador = i; contador >= f; contador -= p) {
              resposta.innerHTML += `${contador} \u{1F449}`  
            }
        } 
        resposta.innerHTML += `\u{1F3C1}` 
    }
}