/**
*   @file Ejercicio 13 | RegExp
*   @description Validar una cuenta Bancaria
*   Los números de cuentas bancarios actuales están formados por 20 dígitos
*   que tienen la estructura siguiente:
*       - El código del banco al que pertenece la cuenta (4 dígitos)
*       - El código de la sucursal en el que se abrió la cuenta (4 dígitos)
*       - Un número de control, llamado dígito de control, que impide errores de
*       teclado (2 dígitos)
*       - Y por último, el número de cuenta (10 dígitos)
*
*   Esta estructura recibe el nombre de clave SICA
*   El dígito de control se calcula en función del código del banco, del código
*   de la sucursal y el número de cuenta a través de una fórmula matemática. Por
*   tanto a partir del número de control puede comprobase si un número de
*   cuenta es correcto o no. Esto es lo que realiza esta aplicación.

*   La manera de comprobar que un IBAN es correcto es siguiendo los
*   siguientes pasos (ejemplo: IBAN ES07 0012 0345 03 0000067890):

*       - Transformar las letras en números según la siguiente serie: A = 10, B = 11, C = 12, etc. 
*       Por lo tanto para España sería E = 14 y S = 28
*       - Pasar tanto los códigos de las letras del país como los dígitos de
*       control al final de la numeración, quedando así: 0012 0345 03
*       0000067890142807
*       - Obtener el resto de dividir éste último número entre 97 (mod 97)
*       - y estableciendo la diferencia entre 98 y el resto. Si el resultado es un
*       dígito, anteponer un cero.
*       98 – 91 = 7 (07)
*       Comprobar si el resultado es igual a los dígitos de control
*       - El IBAN creado sería: IBAN ES07 0012 0345 03 0000067890

*   // Función que devuelve los números correspondientes a cada
*   letra
*   function getNumIBAN(letra){
*       var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
*       return letras.search(letra) + 10;
*   }
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

    let patron = /^([A-Z]{2}\d{2})(\s*\d{4}){2}\s*\d{2}\s*\d{10}$/;
    let exp = new RegExp(patron);

    if(exp.test(document.getElementById('input1').value))
        if(validarIban())
            console.log('true');
        else console.log('false');
    else console.log('false');

}

function validarIban(){

    // Almacenar el IBAN y quitarle los espacios si los tiene
    let iban = document.getElementById('input1').value.replace(/\s/g, '');

    // Pasar las 2 primeras letras a la función getNumIBAN()
    let valor = '';
    for(let i = 0; i < 2; i++)
        valor += getNumIBAN(iban.charAt(i));

    // Al valor de las dos letras concatenarle los dos dígitos restantes del código del banco
    valor = valor + iban.substring(2, 4);

    // Concatenar valor al final del iban
    iban += valor;

    // Eliminar los 4 primeros dígitos
    iban = iban.substring(4);

    // Se le asigna el resto a la variable resto
    let resto = modulo97(iban);

    // Comprobar si el resto da 1 (Correcto)
    if(resto == 1)
        return true;
    return false;

}

function modulo97(iban) {

    // Dividir el la longitud del número entre 7 redondeando el resultado
    let parts = Math.ceil(iban.length/7);
    
    // Definir variable que va a almacenar el resto de todas las divisiones
    let resto = '';

    for (var i = 1; i <= parts; i++)
        resto = String(parseFloat(resto+iban.substr((i - 1) * 7, 7)) % 97);

    return resto;

}

function getNumIBAN(letra){

    const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return LETRAS.search(letra) + 10;

}