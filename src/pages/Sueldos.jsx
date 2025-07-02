import React, { useState } from 'react';

export default function Sueldos() {
    const [basico, setBasico] = useState('');
    const [primas, setPrimas] = useState('');
    const [deducciones, setDeducciones] = useState('');
    const [neto, setNeto] = useState(null);

    const calcular = (e) => {
        e.preventDefault();
        const b = parseFloat(basico) || 0;
        const p = parseFloat(primas) || 0;
        const d = parseFloat(deducciones) || 0;
        setNeto(b + p - d);
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 24 }}>
            <h2 style={{ fontWeight: 600, fontSize: 20, marginBottom: 18, textAlign: 'center' }}>Calculadora de Sueldo Neto</h2>
            <form onSubmit={calcular}>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 4 }}>Sueldo Básico:</label>
                    <input type="number" value={basico} onChange={e => setBasico(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 4 }}>Primas:</label>
                    <input type="number" value={primas} onChange={e => setPrimas(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 4 }}>Deducciones:</label>
                    <input type="number" value={deducciones} onChange={e => setDeducciones(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
                </div>
                <button type="submit" style={{ width: '100%', background: '#1677ff', color: 'white', border: 'none', borderRadius: 4, padding: 10, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Calcular</button>
            </form>
            {neto !== null && (
                <div style={{ marginTop: 20, textAlign: 'center', fontWeight: 600, fontSize: 18 }}>
                    Sueldo Neto: ${neto.toFixed(2)}
                </div>
            )}
            <div style={{ marginTop: 32, textAlign: 'center', color: '#888', fontSize: 13 }}>
                © 2025 - Mi App de Prueba - Todos los derechos reservados.
            </div>
        </div>
    );
}
