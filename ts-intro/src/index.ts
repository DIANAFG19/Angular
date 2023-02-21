/*
    ===== Código de TypeScript =====
*/

class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: string;
    
    imprimirNombre () {
        return this.alterEgo + ' ' + this.nombreReal;
    }
}

const ironMan = new Heroe();

console.log(ironMan);


