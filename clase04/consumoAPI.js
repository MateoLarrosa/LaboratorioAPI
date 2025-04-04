const fetchData = async () => {
    try{
        const response = await fetch('https://reqres.in/api/users?page=1');
        console.log("prueba");
        if(!response.ok) {
            throw new Error('Error al llamar a la api' + response.statusText);
        }
        console.log(response);
        const data = await response.json();
        usuarios = data.data;
        console.log(usuarios);
        renderizarUsuarios(usuarios);
    }catch(error){
        alert("Error: " + error.message);
    }

    
}

const renderizarUsuarios = (listaUsuarios) => {

    const contenedor = document.getElementById('usuariosContainer');
    contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos usuarios

    usuarios.forEach(listaUsuarios => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.classList.add('usuario');

        usuarioDiv.innerHTML = `
            <h3>${listaUsuarios.first_name} ${listaUsuarios.last_name}</h3>
            <p>Email: ${listaUsuarios.email}</p>
            <img src="${listaUsuarios.avatar}" alt="${listaUsuarios.first_name}">
        `;

        contenedor.appendChild(usuarioDiv);
    });
}

const boton = document.getElementById('obtenerUsuarios');

boton.addEventListener('click', () => {
    fetchData();
});

