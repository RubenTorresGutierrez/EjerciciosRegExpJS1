/**
*   @file Ejercicio 3 | RegExp
*   @description Validar DNI
*   Para validar que la letra del dni es correcta, separamos los números de la
*   letra. Dividimos el número entre 23, y con el resto, cogemos el carácter que
*   corresponda de la siguiente cadena.
*   String letra="TRWAGMYFPDXBNJZSQVHLCKE"
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

    let patron = /^\d{8}[A-Z]{1}$/;
    let exp = new RegExp(patron);

    if(exp.test(document.getElementById('input1').value))
        if(comprobarLetra())
            console.log('true');
        else console.log('false');
    else console.log('false');

}

function comprobarLetra(){

    const LETRA = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let dni = document.getElementById('input1').value;
    let letra = dni.charAt(8);
    let numeros = dni.substring(0, 8);

    if(letra == LETRA[numeros%23])
        return true;
    return false;

}