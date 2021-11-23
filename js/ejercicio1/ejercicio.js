/**
*   @file Ejercicio 1 | RegExp
*   @description Realizar una validación de las matrículas modernas (1234ABC)
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

window.onload = iniciar;

function iniciar(){
    
    document.getElementById('input1').onblur = comprobar;

}

function comprobar(){

    let patron = /^\d{4}[A-Z]{3}$/;
    let exp1 = new RegExp(patron);

    if(exp1.test(document.getElementById('input1').value))
        console.log('true');
    else console.log('false')

}