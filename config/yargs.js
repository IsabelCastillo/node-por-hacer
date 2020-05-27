const descripcion = {
    demand: true, // quiere decir que es obligatorio
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default: true, // valor por defectos
    alias: 'c',
    desc: 'Marca como completada la tarea'
}

const argv = require('yargs')

.command('crear', 'Crea un elemento por hacer', {
    descripcion
})

.command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}