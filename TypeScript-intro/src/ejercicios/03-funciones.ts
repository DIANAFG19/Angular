/*
    ===== Código de TypeScript =====
*/

function sumar (a:number, b:number) : number {
    return a + b;
}

const sumarFlecha = (a:number, b:number) : number => {
    return a + b;
}

function multiplicar (numero:number, otroNumero?:number, base:number = 2 ) {
    return numero * base;
}

//const resultado = sumar (10, 20);
//const resultado = multiplicar (5, 0, 10);
//console.log(resultado);

interface PersonajeDos {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje:PersonajeDos, curarX:number) : void {
    personaje.pv += curarX;
}

const nuevoPersonaje : PersonajeDos = {
    nombre: "Diana",
    pv: 50,
    mostrarHp() {
        console.log('Punto de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();
