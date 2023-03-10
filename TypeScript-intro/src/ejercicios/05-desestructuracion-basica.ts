/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 37,
    cancion: "Tears in Heaven",
    detalles: {
        autor: "Eric Clapton",
        anio: 1998
    }
}

const {volumen, segundo, cancion, detalles: {autor}} = reproductor;
// const {autor} = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es: ', cancion);
// console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [p1, p2, p3] = dbz;
const [ , , p3] = dbz;

// console.log("Personaje 1: ", p1)
// console.log("Personaje 2: ", p2)
console.log("Personaje 3: ", p3)

