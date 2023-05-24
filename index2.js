var alumnos = [];

function agregarAlumno(pNombre, papellido, pedad, pmateria){

    var newAlumno = {
        nombre: pNombre,
        apellido: pApellido,
        edad: pEdad,
        materia: pMateria
    };
    console.log(newAlumno);
    alumnos.push(newAlumno);
   
}

function getAlumniList(){
    return alumnos;
}