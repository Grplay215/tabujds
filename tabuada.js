/*************************************************************************************
 *  Objetivo: projeto para realizar calculos de tabuada 
 *  Autor: gabriel renato
 *  Data: 27/02/26
 *  Versão: 1.0
 * ***********************************************************************************/


const readline = require('readline')

const entradaDedados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDedados.question('qual a primeira tabuada? ', function(tabuada){
    let tabuadaInicial = tabuada

    entradaDedados.question('qual a ultima tabuada? ', function(tabuada2){
        let tabuadaFinal = tabuada2

        entradaDedados.question('qual o numero inicial da tabuada? ', function(multiplicador){
            let multiplicadorInicial = multiplicador

            entradaDedados.question('qual o numero final da tabuada? ', function(multiplicador2){
                let multiplicadorFinal = multiplicador2

                let tabu = require('./modulo/tabu.js')
                let tabuadass = tabu.calcularTabuadas(tabuadaInicial, tabuadaFinal, multiplicadorInicial, multiplicadorFinal)

                if (tabuadass) {
                    
                }
            })
        })
    })
})