//Kevin alvarez diaz //Clan gates
let mascotas = [
    {
        nombre: "Rex",
        especie: "Perro",
        raza: "Pastor Alemán",
        edad: 3,
        estado: "Saludable",
        dueño: "Juan Pérez",
        documentoDueño: "12345678",
        contacto: "123456789",
        correo: "juan.perez@riwi.io"
    },
    {
        nombre: "Fiona",
        especie: "Gato",
        raza: "Persa",
        edad: 2,
        estado: "Saludable",
        dueño: "Ana García",
        documentoDueño: "87654321",
        contacto: "987654321",
        correo: "ana.garcia@riwi.io"
    },
    {
        nombre: "Bella",
        especie: "Perro",
        raza: "Golden Retriever",
        edad: 4,
        estado: "Saludable",
        dueño: "Carlos López",
        documentoDueño: "11223344",
        contacto: "1122334455",
        correo: "carlos.lopez@riwi.io"
    },
    {
        nombre: "Tommy",
        especie: "Perro",
        raza: "Bulldog",
        edad: 5,
        estado: "Enfermo",
        dueño: "Marta Gómez",
        documentoDueño: "55667788",
        contacto: "5566778899",
        correo: "marta.gomez@riwi.io"
    },
    {
        nombre: "Mia",
        especie: "Gato",
        raza: "Siamés",
        edad: 3,
        estado: "Saludable",
        dueño: "Sofía Ramírez",
        documentoDueño: "44556677",
        contacto: "4455667788",
        correo: "sofia.ramirez@riwi.io"
    },
    {
        nombre: "Lucky",
        especie: "Perro",
        raza: "Labrador",
        edad: 6,
        estado: "Saludable",
        dueño: "Ricardo Sánchez",
        documentoDueño: "33445566",
        contacto: "3344556677",
        correo: "ricardo.sanchez@riwi.io"
    },
    {
        nombre: "Chispa",
        especie: "Gato",
        raza: "Sphynx",
        edad: 1,
        estado: "Saludable",
        dueño: "Lucía Torres",
        documentoDueño: "22334455",
        contacto: "2233445566",
        correo: "lucia.torres@riwi.io"
    },
    {
        nombre: "Rocky",
        especie: "Perro",
        raza: "Doberman",
        edad: 4,
        estado: "Saludable",
        dueño: "Pablo Rodríguez",
        documentoDueño: "11223344",
        contacto: "1122334477",
        correo: "pablo.rodriguez@riwi.io"
    },
    {
        nombre: "Simba",
        especie: "Gato",
        raza: "Maine Coon",
        edad: 2,
        estado: "Saludable",
        dueño: "Carmen Morales",
        documentoDueño: "99887766",
        contacto: "9988776655",
        correo: "carmen.morales@riwi.io"
    },
    {
        nombre: "Zeus",
        especie: "Perro",
        raza: "Rottweiler",
        edad: 5,
        estado: "Saludable",
        dueño: "Roberto Silva",
        documentoDueño: "77889900",
        contacto: "7788990011",
        correo: "roberto.silva@riwi.io"
    },
];

// Función para mostrar el menú
function mostrarMenu() {
    const menu = `
**********************************************
BIENVENIDO A LA VETERINARIA 
**********************************************
¿En qué podemos ayudarte? Este es nuestro menú:

1) Registrar una nueva mascota
2) Ver la lista de todas las mascotas registradas
3) Ver una lista de todos los dueños
4) Buscar una mascota por el nombre
5) Filtrar mascota para identificar su dueño
6) Eliminar una mascota del sistema
7) Cerrar el menú
**********************************************
    `;
    
    alert(menu);
    
    const opcion = prompt("Ingrese una opción (1-7):");

    switch (parseInt(opcion)) {
        case 1:
            registrarMascota();
            break;
        case 2:
            verListaDeMascotas();
            break;
        case 3:
            verListaDeDueños();
            break;
        case 4:
            buscarMascota();
            break;
        case 5:
            filtrarMascota();
            break;
        case 6:
            eliminarMascota();
            break;
        case 7:
            alert("Gracias por utilizar nuestros servicios...Vuelve pronto!");
            return;
        default:
            alert("Opción no válida. Inténtalo de nuevo.");
            mostrarMenu(); // Repetir el menú si la opción es inválida
    }
}

// Función para registrar una nueva mascota
function registrarMascota() {
    const nombre = prompt("Ingrese el nombre de la mascota:");
    const especie = prompt("Ingrese la especie de la mascota:");
    const raza = prompt("Ingrese la raza de la mascota:");
    const edad = parseInt(prompt("Ingrese la edad de la mascota:"));
    const estado = prompt("Ingrese el estado de la mascota:");
    const dueño = prompt("Ingrese el nombre del dueño:");
    const documentoDueño = prompt("Ingrese el documento del dueño:");
    const contacto = prompt("Ingrese el contacto del dueño:");
    const correo = prompt("Ingrese el correo del dueño:");

    mascotas.push({
        nombre,
        especie,
        raza,
        edad,
        estado,
        dueño,
        documentoDueño,
        contacto,
        correo
    });

    alert(` Excelente tu mascota ${nombre} ha sido registrada.`);
    mostrarMenu(); // Volver a mostrar el menú
}

// Función para ver todas las mascotas registradas
function verListaDeMascotas() {
    let lista = "Lista de todas las mascotas: =====>";
    mascotas.forEach((mascota, index) => {
        lista += `
        ${index + 1}.
         ${mascota.nombre}
         ${mascota.especie}
        (${mascota.raza}),
         Edad: ${mascota.edad},
         Estado: ${mascota.estado}, 
         Dueño: ${mascota.dueño} 
         (${mascota.documentoDueño}), 
         Contacto: ${mascota.contacto}, 
         Correo: ${mascota.correo}`;
    });
    console.log(lista);
    mostrarMenu(); // Volver a mostrar el menú
}

// Función para ver la lista de todos los dueños
function verListaDeDueños() {
    let lista = "Lista de todos los dueños:\n";
    const dueñosUnicos = [...new Set(mascotas.map(m => m.dueño))];
    dueñosUnicos.forEach((dueño, index) => {
        lista += `${index + 1}. ${dueño}\n`;
    });
    console.log(lista);
    mostrarMenu(); // Volver a mostrar el menú
}

// Función para buscar una mascota por su nombre
function buscarMascota() {
    const nombre = prompt("Ingrese el nombre de la mascota a buscar:");
    const mascota = mascotas.find(m => m.nombre === nombre);
    if (mascota) {
        alert(`Mascota encontrada: ${mascota.nombre} - ${mascota.especie} (${mascota.raza}), Edad: ${mascota.edad}, Estado: ${mascota.estado}, Dueño: ${mascota.dueño}, Contacto: ${mascota.contacto}`);
    } else {
        alert("No se encontró la mascota.");
    }
    mostrarMenu(); // Volver a mostrar el menú
}

// Función para filtrar mascotas por dueño
function filtrarMascota() {
    const dueño = prompt("Ingrese el nombre del dueño para filtrar:");
    const mascotasFiltradas = mascotas.filter(m => m.dueño === dueño);
    if (mascotasFiltradas.length > 0) {
        let lista = `Mascotas de ${dueño}:\n`;
        mascotasFiltradas.forEach((mascota, index) => {
            lista += `${index + 1}. ${mascota.nombre} - ${mascota.especie}, (${mascota.raza})\n`;
        });
        alert(lista);
    } else {
        alert("No se encontraron mascotas de este dueño.");
    }
    mostrarMenu(); // Volver a mostrar el menú
}

// Función para eliminar una mascota del array
function eliminarMascota() {
    const nombre = prompt("Ingrese el nombre de la mascota a eliminar:");
    const index = mascotas.findIndex(m => m.nombre === nombre);
    if (index !== -1) {
        mascotas.splice(index, 1);
        alert(` tu mascota ${nombre} fue eliminada del sistema correctamente.`);
    } else {
        alert("No se encontró la mascota.");
    }
    mostrarMenu(); // Volver a mostrar el menú
}

// Iniciar el menú
mostrarMenu();