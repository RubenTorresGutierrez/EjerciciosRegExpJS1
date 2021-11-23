/**
*   @file Ejercicio 4 | RegExp
*   @description Fecha con formato DD/MM/AAAA
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

    // let patron = /^\d{2}\/\d{2}\/\d{4}$/;
    var patron = new RegExp(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/);
    let exp = new RegExp(patron);

    if(exp.test(document.getElementById('input1').value))
        console.log('true');
    else console.log('false');

}