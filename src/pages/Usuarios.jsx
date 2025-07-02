import React from 'react';

export default function Usuarios() {
    return (
        <div>
            <h2 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12 }}>Usuarios</h2>
            <p style={{ margin: 0 }}>Gestiona el listado de usuarios registrados.</p>
            <ul style={{ textAlign: 'left', marginTop: 16, paddingLeft: 20 }}>
                <li>Juan Pérez - Desarrollador</li>
                <li>Ana Gómez - Diseñadora</li>
            </ul>
        </div>
    );
}
