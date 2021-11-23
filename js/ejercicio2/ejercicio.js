/**
*   @file Ejercicio 2 | RegExp
*   @description Realizar una validación de las matrículas antigua (M12345, BA5575C o BA1234AB)
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

    // let patron = /^[A-Z]{1,2}\d{4,5}[A-Z]{0,2}$/;
    let patron = /^[A-Z]{1}\d{5}|[A-Z]{2}\d{4}[A-Z]{1,2}$/;
    let exp = new RegExp(patron);

    if(exp.test(document.getElementById('input1').value))
        console.log('true');
    else console.log('false')

}