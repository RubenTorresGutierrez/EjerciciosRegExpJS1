/**
*   @file Ejercicio 8 | RegExp
*   @description Móvil
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

    let patron = /^(\+34|0034|34)*(6|7)[0-9]{8}$/;
    let exp = new RegExp(patron);

    if(exp.test(document.getElementById('input1').value))
        console.log('true');
    else console.log('false');

}