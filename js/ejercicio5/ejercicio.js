/**
*   @file Ejercicio 5 | RegExp
*   @description Código Postal
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

    // let patron = /^(0\d{4}|[1-4]\d{4}|5[0-2]\d{3})$/;
    let patron = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    let exp = new RegExp(patron);

    if(exp.test(document.getElementById('input1').value))
        console.log('true');
    else console.log('false');

}