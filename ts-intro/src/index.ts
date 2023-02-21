/*
    ===== Código de TypeScript =====
*/

class Heroe {
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) { }

}

const ironMan = new Heroe('Iron Man', 45, 'Tony Stark');

console.log(ironMan);


