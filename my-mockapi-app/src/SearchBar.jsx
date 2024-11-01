import React from 'react';

function SearchBar({ search, onSearchChange }) {
return (
<input
type="text"
className="form-control"
placeholder="Buscar por nombre..."
value={search}
onChange={(e) => onSearchChange(e.target.value)}
/>
);
}

export default SearchBar;