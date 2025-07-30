// esto es para el sistema de estudiantes
let estudiantes = [];
let editando = false;
let estudianteEditId = null;

// cuando carga la pagina
document.addEventListener('DOMContentLoaded', function() {
    cargarEstudiantes();
    mostrarEstudiantes();
    actualizarStats();
});

// aqui agrego estudiantes 
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let matricula = document.getElementById('matricula').value;
    let carrera = document.getElementById('carrera').value;
    let edad = document.getElementById('edad').value;
    
    if (editando) {
        // editar estudiante
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].id == estudianteEditId) {
                estudiantes[i].nombre = nombre;
                estudiantes[i].apellido = apellido;
                estudiantes[i].matricula = matricula;
                estudiantes[i].carrera = carrera;
                estudiantes[i].edad = parseInt(edad);
                break;
            }
        }
        editando = false;
        estudianteEditId = null;
        document.getElementById('formTitle').textContent = 'Agregar Estudiante';
        document.getElementById('btnText').textContent = 'Guardar';
        document.getElementById('cancelBtn').style.display = 'none';
    } else {
        // nuevo estudiante
        let nuevoEstudiante = {
            id: Date.now(),
            nombre: nombre,
            apellido: apellido,
            matricula: matricula,
            carrera: carrera,
            edad: parseInt(edad),
            activo: true,
            fechaRegistro: new Date().toLocaleDateString()
        };
        estudiantes.push(nuevoEstudiante);
    }
    
    guardarEstudiantes();
    mostrarEstudiantes();
    actualizarStats();
    limpiarFormulario();
});

// cancelar edicion
document.getElementById('cancelBtn').addEventListener('click', function() {
    editando = false;
    estudianteEditId = null;
    document.getElementById('formTitle').textContent = 'Agregar Estudiante';
    document.getElementById('btnText').textContent = 'Guardar';
    document.getElementById('cancelBtn').style.display = 'none';
    limpiarFormulario();
});

// buscar
document.getElementById('searchName').addEventListener('input', function() {
    mostrarEstudiantes();
});

document.getElementById('filterCareer').addEventListener('change', function() {
    mostrarEstudiantes();
});

document.getElementById('filterStatus').addEventListener('change', function() {
    mostrarEstudiantes();
});

// limpiar filtros
document.getElementById('clearFiltersBtn').addEventListener('click', function() {
    document.getElementById('searchName').value = '';
    document.getElementById('filterCareer').value = '';
    document.getElementById('filterStatus').value = '';
    mostrarEstudiantes();
});

function mostrarEstudiantes() {
    let busqueda = document.getElementById('searchName').value.toLowerCase();
    let filtroCarrera = document.getElementById('filterCareer').value;
    let filtroEstado = document.getElementById('filterStatus').value;
    
    let estudiantesFiltrados = estudiantes.filter(function(estudiante) {
        let coincideBusqueda = (estudiante.nombre || '').toLowerCase().includes(busqueda) || 
                              (estudiante.apellido || '').toLowerCase().includes(busqueda) ||
                              (estudiante.matricula || '').toLowerCase().includes(busqueda);
        
        let coincideCarrera = filtroCarrera === '' || estudiante.carrera === filtroCarrera;
        let coincideEstado = filtroEstado === '' || estudiante.activo.toString() === filtroEstado;
        
        return coincideBusqueda && coincideCarrera && coincideEstado;
    });
    
    let lista = document.getElementById('studentsList');
    lista.innerHTML = '';
    
    if (estudiantesFiltrados.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        return;
    } else {
        document.getElementById('noResults').style.display = 'none';
    }
    
    estudiantesFiltrados.forEach(function(estudiante) {
        let card = `
            <div class="col-md-6 col-lg-4 mb-3">
                <div class="card student-card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h6 class="card-title mb-1">${estudiante.nombre} ${estudiante.apellido}</h6>
                            <span class="badge ${estudiante.activo ? 'bg-success' : 'bg-secondary'} text-white">
                                ${estudiante.activo ? 'Activo' : 'Inactivo'}
                            </span>
                        </div>
                        <p class="card-text text-muted small mb-1">
                            <i class="fas fa-id-card"></i> ${estudiante.matricula}
                        </p>
                        <p class="card-text text-muted small mb-1">
                            <i class="fas fa-graduation-cap"></i> ${estudiante.carrera}
                        </p>
                        <p class="card-text text-muted small mb-3">
                            <i class="fas fa-calendar"></i> ${estudiante.edad} años | ${estudiante.fechaRegistro}
                        </p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-outline-primary btn-sm" onclick="editarEstudiante(${estudiante.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-outline-${estudiante.activo ? 'warning' : 'success'} btn-sm" 
                                    onclick="cambiarEstado(${estudiante.id})">
                                <i class="fas fa-${estudiante.activo ? 'user-times' : 'user-check'}"></i>
                            </button>
                            <button class="btn btn-outline-danger btn-sm" onclick="eliminarEstudiante(${estudiante.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        lista.innerHTML += card;
    });
}

function editarEstudiante(id) {
    let estudiante = estudiantes.find(e => e.id === id);
    if (estudiante) {
        document.getElementById('nombre').value = estudiante.nombre;
        document.getElementById('apellido').value = estudiante.apellido;
        document.getElementById('matricula').value = estudiante.matricula;
        document.getElementById('carrera').value = estudiante.carrera;
        document.getElementById('edad').value = estudiante.edad;
        
        editando = true;
        estudianteEditId = id;
        document.getElementById('formTitle').textContent = 'Editar Estudiante';
        document.getElementById('btnText').textContent = 'Actualizar';
        document.getElementById('cancelBtn').style.display = 'inline-block';
    }
}


function cambiarEstado(id) {
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].id === id) {
            estudiantes[i].activo = !estudiantes[i].activo;
            break;
        }
    }
    guardarEstudiantes();
    mostrarEstudiantes();
    actualizarStats();
}

function eliminarEstudiante(id) {
    if (confirm('¿Estas seguro de eliminar este estudiante?')) {
        estudiantes = estudiantes.filter(e => e.id !== id);
        guardarEstudiantes();
        mostrarEstudiantes();
        actualizarStats();
    }
}

function actualizarStats() {
    let total = estudiantes.length;
    let activos = estudiantes.filter(e => e.activo).length;
    let edadPromedio = 0;
    let carreras = new Set();
    
    if (total > 0) {
        let sumaEdades = estudiantes.reduce((suma, e) => suma + e.edad, 0);
        edadPromedio = Math.round(sumaEdades / total);
        estudiantes.forEach(e => carreras.add(e.carrera));
    }
    
    document.getElementById('totalStudents').textContent = total;
    document.getElementById('activeStudents').textContent = activos;
    document.getElementById('avgAge').textContent = edadPromedio;
    document.getElementById('totalCareers').textContent = carreras.size;
}

function limpiarFormulario() {
    document.getElementById('studentForm').reset();
}

// guardar en localstorage
function guardarEstudiantes() {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
}

// cargar desde localstorage
function cargarEstudiantes() {
    let datos = localStorage.getItem('estudiantes');
    if (datos) {
        estudiantes = JSON.parse(datos);
    }
}/ /   D a t e   f o r m a t   f i x  
 