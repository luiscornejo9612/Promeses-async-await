// Crea una funció que donat un nombre per paràmetre et retorni, mitjançant una promesa si és
// divisible entre dos o no.
// Mitjançant un console.log mostra els possibles resultats

function comprobarDivisibilidad() {
    return new Promise((resolve, reject) => {
        const num = prompt("Ingrese un número:");
        if (!isNaN(num)) {
            const parsedNum = parseInt(num);
            if (parsedNum % 2 === 0) {
                const result = parsedNum / 2;
                resolve(`${parsedNum} es divisible entre 2 = ${result}`);
                console.log(`${parsedNum} es divisible entre 2 = ${result}`)
            } else {
                reject(`${parsedNum} no es divisible entre 2`);
            }
        } else {
            reject("Entrada inválida. Por favor, ingrese un número válido.");
        }
    });
}


// ********************************************************************************************************************

// Assigna-li una promesa a una variable que comprovi si un valor és major o igual a 0 i menor o
// igual a 10.
// Mitjançant un console.log mostra els possibles resultats

function mayoIgualnum() {
    const mayoIgual = new Promise((resolve, reject) => {
        const numComprobado = parseFloat(prompt("Ingrese el numero: "));
        if (numComprobado >= 0 && numComprobado <= 10) {
            switch (numComprobado) {
                case 0:
                    resolve(`${numComprobado} es igual a 0`);
                    console.log(`${numComprobado} es igual a 0`);
                    break;
                case 10:
                    resolve(`${numComprobado} es igual a 10`);
                    console.log(`${numComprobado} es igual a 10`);
                    break;
                default:
                    if (numComprobado > 0 && numComprobado < 10) {
                        resolve(`${numComprobado} es mayor que 0 y menor que 10`);
                        console.log(`${numComprobado} es mayor que 0 y menor que 10`);
                    } else if (numComprobado > 10) {
                        resolve(`${numComprobado} es mayor que 10`);
                        console.log(`${numComprobado} es mayor que 10`);
                    }
                    break;
            }
        } else {
            reject("El número ingresado está fuera del rango permitido (0-10)");
        }
    });
}

// **************************************************************************************************************

// Crea una funció que es digui esVocal que retorni una promesa que calculi si una lletra està dins
// d’un array donat.
// let arr = [“a”, “e”, “i”, “o”, “u”]
// Mitjançant un console.log mostra els possibles resultats


function esVocal() {
    return new Promise((resolve, reject) => {
        const letra = prompt("Ingrese la letra: ");
        const arr = ["a", "e", "i", "o", "u"];
        if (letra.length === 1) {
            if (arr.includes(letra)) {
                resolve(`${letra} se encuentra en el array`);
                console.log(`${letra} se encuentra en el array ${arr}`);
            } else {
                reject(`${letra} no se encuentra en el array`);
            }
        } else {
            reject(`${letra} ingresa solo una letra`);
        }
    });
}

// ****************************************************************************************************************

// Crea una funció JS que rebi 2 paràmetres i que retorni una promesa que calculi la divisió del
// primer entre el 2on paràmetre.
// Fes que si la divisió és possible torni el quocient, si el 2on paràmetre és 0 que torni un missatge
// d’error

function calDivicio() {
    return new Promise((resolve, reject) => {
        const num1 = prompt("Ingrese un número:");
        const num2 = prompt("Ingrese un número:");
        const parsedNum1 = parseInt(num1);
        const parsedNum2 = parseInt(num2);
        if (parsedNum2 > 0) {
            const result = parsedNum1 / parsedNum2;
            resolve(`${parsedNum1} / ${parsedNum2} el resultado de esta divicion es = ${result}`);
            console.log(`${parsedNum1} / ${parsedNum2} el resultado de esta divicion es = ${result}`)
        } else {
            reject(`Error el segundo valor tiene que ser mayor que 0`);
        }

    });
}





