
    


function calcularTabuadas(tabuada, tabuada2, multiplicador, multiplicador2) {

    let apoio = 0;

    
    
        if (tabuada== '' || tabuada2==''|| multiplicador==''||multiplicador2=='') {
            return false
        }else if (tabuada == 0 || tabuada == 100 ||tabuada2 == 0 || tabuada2 == 100 ||multiplicador == 1 || multiplicador == 50 ||multiplicador2 == 1 || multiplicador2 == 50 ) {
            return false
        } else{
            
        
    
    
    

    // Corrige ordem das tabuadas
    if (tabuada2 < tabuada) {
        apoio = tabuada2;
        tabuada2 = tabuada;
        tabuada = apoio;
    }

    // Corrige ordem dos multiplicadores
    if (multiplicador2 < multiplicador) {
        apoio = multiplicador2;
        multiplicador2 = multiplicador;
        multiplicador = apoio;
    }

    let totalTabuadas = tabuada2 - tabuada + 1;
    var tabuadaCompleta = new Array(totalTabuadas);

    let indiceTabuada = 0;

    while (indiceTabuada < totalTabuadas) {

        let numeroAtual = tabuada;
        let tamanhoDoVetor = multiplicador2 - multiplicador + 1;
        let tabuada = new Array(tamanhoDoVetor);

        let i = 0;
        let multiplicador = multiplicador;

        while (i < tamanhoDoVetor) {
            let produto = numeroAtual * multiplicador;
            tabuada[i] = `${numeroAtual} X ${multiplicador} = ${produto}`;
            multiplicador = multiplicador + 1;
            i = i + 1;
        }

        tabuadaCompleta[indiceTabuada] = tabuada;

        tabuada = tabuada + 1;
        indiceTabuada = indiceTabuada + 1;
    }

    exibirTabuadas(tabuadaCompleta);
}

function exibirTabuadas(tabuadaCompleta) {

    let i = 0;

    while (i < tabuadaCompleta.length) {

        let tabuada = tabuadaCompleta[i];
        let j = 0;

        while (j < tabuada.length) {
            console.log(tabuada[j]);
            j = j + 1;
        }

        console.log(""); 
        i = i + 1;
    }
}





}


let calc = calcularTabuadas(0, 10, 1, 5)

let exibicao = exibirTabuadas(tabuadaCompleta)

console.log(exibicao)









