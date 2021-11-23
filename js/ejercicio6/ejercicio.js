/**
*   @file Ejercicio 6 | RegExp
*   @description Correo electrónico
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

    // let patron = /^\S+@\S+\.\S+$/;
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let exp = new RegExp(patron);

    if(exp.test(document.getElementById('input1').value))
        console.log('true');
    else console.log('false');

}