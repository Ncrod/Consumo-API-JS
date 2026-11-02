const url = "https://jsonplaceholder.typicode.com/users";
const tabla = document.getElementById("tabla-usuarios");

async function cargarUsuarios() {
  try {
    const respuesta = await fetch(url);
    const usuarios = await respuesta.json();

    
    usuarios.forEach(function (usuario) {
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>
        <td>${usuario.phone}</td>
        <td>${usuario.company.name}</td>
      `;

      tabla.appendChild(fila);
    });
  } catch (error) {
    tabla.innerHTML = `<tr><td colspan="4">Error al cargar los datos</td></tr>`;
    console.log("Error:", error);
  }
}

cargarUsuarios();
