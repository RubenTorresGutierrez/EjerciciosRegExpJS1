/**
*   @file Ejercicio15 | RegExp
*   @description Validar una dirección IP.
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

    // let patron = '(\d{1,3}\\.){3}\d{1,3}';
    let patron = /^(\d{1,3}\.){3}\d{1,3}$/;
    let exp1 = new RegExp(patron);
    // if(document.getElementById('iIP').value.match(exp1))
    if(exp1.test(document.getElementById('input1').value))
        console.log('true');
    else console.log('false');

}