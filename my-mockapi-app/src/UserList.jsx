import React from 'react';

function UserList({ usuarios }) {
return (
<ul className="list-group my-4">
{usuarios.map(usuario => (
<li key={usuario.id} className="list-group-item">
{usuario.name} - {usuario.email}
</li>
))}
</ul>
);
}

export default UserList;