import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';

function App() {
const [usuarios, setUsuarios] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
fetch('https://67243347493fac3cf24d7cde.mockapi.io/users') // Reemplaza con tu MockAPI URL
.then(response => response.json())
.then(data => setUsuarios(data))
.catch(error => console.error('Error al cargar los usuarios:', error));
}, []);

const usuariosFiltrados = usuarios.filter(usuario =>
usuario.name.toLowerCase().includes(search.toLowerCase())
);

return (
<div className="container">
<h1 className="my-4">Lista de Usuarios</h1>
<SearchBar search={search} onSearchChange={setSearch} />
<UserList usuarios={usuariosFiltrados} />
</div>
);
}

export default App;
