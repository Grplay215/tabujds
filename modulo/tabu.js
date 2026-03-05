
    


function calcularTabuadas(tabuada, tabuada2, multiplicador, multiplicador2) {

    let apoio = 0;

    if (tabuada == '' || tabuada2 == '' || multiplicador == '' || multiplicador2 == '') {
        return false

    }else if (tabuada == 0 || tabuada2 == 100 ) {
        return false

    }else if ( multiplicador == 1 || multiplicador2 == 50) {
        return false
        
    }

    if (tabuada2 < tabuada) {
        apoio = tabuada2
        tabuada2 = tabuada
        tabuada = apoio
    }

    if (multiplicador2 < multiplicador) {
        apoio = multiplicador2
        multiplicador2 = multiplicador
        multiplicador = apoio
    }

    let totalTabuadas = tabuada2 - tabuada + 1
    let tabuadaCompleta = []

    let indiceTabuada = 0

    while (indiceTabuada < totalTabuadas) {

        let numeroAtual = tabuada
        let linhasTabuada = []

        let multiplicadorAtual = multiplicador

        while (multiplicadorAtual <= multiplicador2) {

            let produto = numeroAtual * multiplicadorAtual
            linhasTabuada.push(`${numeroAtual} X ${multiplicadorAtual} = ${produto}`)

            multiplicadorAtual++
        }

        tabuadaCompleta.push(linhasTabuada)

        tabuada++
        indiceTabuada++
    }

    return tabuadaCompleta
}

function exibirTabuadas(exibir) {

    let i = 0;

    while (i < exibir.length) {

        let tabuada = exibir[i];
        let j = 0;

        while (j < tabuada.length) {
            console.log(tabuada[j]);
            j = j + 1;
        }

        console.log(""); 

        i = i + 1;
    }
}

module.exports ={
    calcularTabuadas,
    exibirTabuadas
}














