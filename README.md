📋 Descripción del Proyecto
Este sistema permite gestionar de manera eficiente la información de los estudiantes del ITLA, proporcionando una interfaz web intuitiva y funcional para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los registros estudiantiles.


Características Principales

Dashboard Interactivo: Estadísticas en tiempo real sobre estudiantes
Gestión Completa: CRUD completo de estudiantes
Búsqueda Avanzada: Filtros por nombre, matrícula, carrera y estado
Diseño Responsivo: Compatible con dispositivos móviles y desktop
Validación de Datos: Validación completa de formularios
Interfaz Moderna: Diseño atractivo con Bootstrap 5

Tecnologías Utilizadas
Frontend

HTML5: Estructura semántica
CSS3: Estilos personalizados
Bootstrap 5.3.0: Framework CSS
JavaScript (Vanilla): Lógica de la aplicación
Font Awesome 6.4.0: Iconografía

Herramientas de Desarrollo

Git: Control de versiones
GitHub: Repositorio remoto
Git Flow: Metodología de ramas
Visual Studio Code: Editor de código

Instalación y Uso
Prerrequisitos

Navegador web moderno (Chrome, Firefox, Safari, Edge)
Git instalado en tu sistema

Instalación
bash# Clonar el repositorio
git clone https://github.com/tu-usuario/sistema-estudiantes-itla.git

# Navegar al directorio
cd sistema-estudiantes-itla

# Abrir el archivo index.html en tu navegador
open index.html
Uso del Sistema

Dashboard: Visualiza estadísticas generales de estudiantes
Gestión de Estudiantes: Ve la lista completa con opciones de filtrado
Agregar Estudiante: Completa el formulario para registrar nuevos estudiantes
Editar/Eliminar: Usa los botones de acción en cada tarjeta de estudiante

📁 Estructura del Proyecto
sistema-estudiantes-itla/
├── 📄 index.html              # Archivo principal de la aplicación
├── 📁 css/
│   └── 📄 styles.css          # Estilos personalizados
├── 📁 js/
│   ├── 📄 app.js              # Lógica principal de la aplicación
│   ├── 📄 students.js         # Funciones CRUD de estudiantes
│   └── 📄 utils.js            # Utilidades y funciones auxiliares
├── 📁 assets/
│   └── 📁 images/
│       └── 📄 logo-itla.png   # Logo institucional
├── 📁 docs/
│   └── 📄 CHANGELOG.md        # Registro de cambios
├── 📄 README.md               # Documentación del proyecto
└── 📄 .gitignore              # Archivos ignorados por Git
Funcionalidades Implementadas
Dashboard

Contador de estudiantes totales
Estudiantes activos/inactivos
Edad promedio
Carreras activas
Lista de estudiantes recientes

👤 Gestión de Estudiantes

Crear: Agregar nuevos estudiantes con validación completa
Leer: Visualizar lista de estudiantes con información detallada
Actualizar: Editar información existente de estudiantes
Eliminar: Eliminar registros con confirmación de seguridad

🔍 Búsqueda y Filtros

Búsqueda por nombre, apellido o matrícula
Filtro por carrera académica
Filtro por estado (activo/inactivo)
Función para limpiar todos los filtros

🔧 Configuración de Desarrollo
Git Flow Implementado
El proyecto utiliza la metodología Git Flow con las siguientes ramas:

main: Rama de producción
develop: Rama de desarrollo
qa: Rama de testing
feature/*: Ramas de características específicas
hotfix/*: Ramas de correcciones urgentes

Ramas Desarrolladas

feature/login-form - Estructura y formulario base
feature/student-dashboard - Dashboard principal
feature/crud-operations - Operaciones CRUD
feature/search-functionality - Sistema de búsqueda
hotfix/date-validation - Validación de fechas mejorada

📝 Convenciones de Código
Commits

feat: Nueva funcionalidad
fix: Corrección de errores
docs: Documentación
style: Cambios de formato
refactor: Refactorización de código

Nomenclatura

Variables: camelCase (estudiantesActivos)
Funciones: camelCase (cargarDashboard)
Constantes: UPPER_CASE (MAX_ESTUDIANTES)
Archivos: kebab-case (student-card.html)

👨‍💻 Información Académica

Asignatura: Programación III
Profesor: Kelyn Tejada
Institución: Instituto Tecnológico de Las Américas (ITLA)
Período: Julio 2025
Tipo de Proyecto: Tarea Individual (70% - Proyecto Práctico)

🤝 Contribuciones
Este es un proyecto académico individual. Sin embargo, si encuentras algún error o tienes sugerencias:

Fork el proyecto
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request

📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.
🎯 Estado del Proyecto

✅ Dashboard funcional
✅ CRUD completo implementado
✅ Sistema de búsqueda y filtros
✅ Validación de datos
✅ Diseño responsivo
✅ Git Flow implementado correctamente
✅ 15 Pull Requests completados