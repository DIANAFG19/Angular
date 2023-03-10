/*
    ===== Código de TypeScript =====
*/

//let habilidades = ['Bash', 'Counter', 'Healings', 50];
let habilidades : string[] = ['Bash', 'Counter', 'Healings'];

interface Personaje {
    nombre : string;
    hp : number;
    habilidades : string[],
    puebloNatal ?: string;
}

const personaje : Personaje = {
    nombre : "Diana",
    hp : 100,
    habilidades : ['Bash', 'Counter', 'Healings']
}

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);
