/**
*   @file Ejercicio 17 | RegExp
*   @description Comprobar que una codificación de tarjeta de crédito es valida
*   El número se compone de tres partes principales:
*   Los 4 primeros dígitos componen el identificativo del banco que cede la tarjeta.
*   hay un numero diferente para cada banco(esto se busca en internet).
*   El 5 digito es el tipo de tarjeta e indica que entidad financiera gestiona esta
*   tarjeta. Las más importantes son Visa (4), American Expres (3), Master Card (5),
*   Discover(6). Los 10 dígitos siguientes componen el numero de usuario e
*   identifican a este de manera única.
*
*   Digito de control es el ultimo numero y se obtiene aplicando un algoritmo al resto
*   del numero.
*
*   El formato es el siguiente 1111 2333 3333 3334
*
*   algoritmo de codificación:
*
*   Se realiza en tres pasos.
*
*   Si tenemos el numero de la tarjeta 4539 4512 0398 7356 y queremos comprobar
*   que es válido:
*       a. Multiplicamos por dos los números de las posiciones impares (4-3-4-
*       1-0-9-7-5) y dejarlos con un solo digito.
*           4*2=8
*           3*2=6
*           4*2=8
*           1*2=2
*           0*2=0
*
*       Si el número resultante es mayor que 10, o bien se suman los dos
*       dígitos, o bien al número se le resta 9.
*           9*2=18-->1+8=9
*           7*2=14--->1+4=5
*           5*2=10--->1+0=1
*       
*
*       b. Sumar los dígitos de las posiciones pares y los nuevos de las
*       posiciones impares.
*           5+9+5+2+3+8+6+ 8+6+8+2+0+9+5+1=80
*
*
*       c. Si el resultado es múltiplo de 10 y menor de 150 entonces el número
*       es válido.
*
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

    let patron = /^(?:\d{15,16}|\d{4}(?:(?:\s+\d{4}){3}|\s+\d{6}\s\d{5}))$/;
    let exp = new RegExp(patron);

    if(exp.test(document.getElementById('input1').value))
        if(comprobarTarjeta())
            console.log('true');
        else console.log('false');
    else console.log('false');

}

function comprobarTarjeta(){

    // Almacenar el número de la tarjeta y quitarle los espacios si los tiene
    let numTarjeta = document.getElementById('input1').value.replace(/\s/g, '');
    let pares = [];
    let impares = [];

    // Multiplicar por dos los números de las posiciones impares
    for(let i = 0; i < numTarjeta.length; i++)
        if((i + 1) % 2 != 0)
            //Si el número resultante es mayor que 10 se le resta 9.
            if(numTarjeta.charAt(i) * 2 > 9)
                impares.push((parseInt(numTarjeta.charAt(i)) * 2) - 9);
            else impares.push(parseInt(numTarjeta.charAt(i)) * 2);
        else pares.push(parseInt(numTarjeta.charAt(i)));

    // Sumar los dígitos de las posiciones pares y los nuevos de las posiciones impares.
    let suma = impares.reduce((x, y) => x + y);
    suma += pares.reduce((x, y) => x + y);

    // Si el resultado es múltiplo de 10 y menor de 150 entonces el número es válido
    if(suma % 10 == 0 && suma < 150)
        return true;
    return false;

}