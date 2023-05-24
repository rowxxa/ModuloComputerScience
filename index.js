document.querySelector("#guardarAlumno").addEventListener("click", guardarAlumni);

function guardarAlumni(){
    var sNombre = document.querySelector("#txtNombre").value,
        sApellido = document.querySelector("#txtApellido").value,
        sEdad = document.querySelector("#txtEdad").value,
        sMateria = document.querySelector("#txtMateria").value,

        agregarAlumno(sNombre,sApellido,sEdad,sMateria);
        showList()
}

function showList(){
    var list = getAlumniList(),
    tbody = document.querySelector("#listadoAlumnos tbody");

    tbody.innerHTML = "";

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
        nameCell = row.insertCell(0),
        apellidoCell = row.insertCell(1),
        edadCell = row.insertCell(2),
        materiaCell = row.insertCell(3),

        nameCell.innerHTML = list[i].nombre;
        apellidoCell.innerHTML = list[i].apellido;
        edadCell.innerHTML = list[i].edad;
        materiaCell.innerHTML = list[i].materia;


        tbody.appendChild(row);
    }
}