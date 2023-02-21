/*
    ===== Código de TypeScript =====
*/

import { calcularISV, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Teléfono 1',
        precio: 100
    },
    {
        desc: 'Teléfono 2',
        precio: 150
    },
];

const [total, isv] = calcularISV(carritoCompras);

console.log("Precio total: ", total);
console.log("Precio de ISV: ", isv);
