import { generarId } from "./funciones.js";

//Al hacer modulaciones detecta las variables como constantes, entonces podemos hacerlo un objeto y como value le ponemos false, asi no lo hace una constante
let editando = {
    value:false
}

// Objeto de Cita
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}


export {
    editando,
    citaObj
};