


import React from 'react';
import { Layout, Typography, Divider, Carousel } from 'antd';
import 'antd/dist/reset.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Sueldos from './pages/Sueldos';
import Bono from './pages/Bono';
import Registro from './pages/Registro';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const initialUsers = [
  { key: 1, nombre: 'Juan Pérez', puesto: 'Desarrollador', sueldo: 1200 },
  { key: 2, nombre: 'Ana Gómez', puesto: 'Diseñadora', sueldo: 1100 },
];

function App() {
  const [users, setUsers] = React.useState(initialUsers);
  const [form] = Form.useForm();

  const columns = [
    { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
    { title: 'Puesto', dataIndex: 'puesto', key: 'puesto' },
    { title: 'Sueldo Base', dataIndex: 'sueldo', key: 'sueldo', render: (s) => `$${s}` },
    { title: 'Sueldo Neto', key: 'neto', render: (_, record) => `$${(record.sueldo * 0.85).toFixed(2)}` },
  ];

  const onFinish = (values) => {
    const newUser = {
      key: users.length + 1,
      ...values,
      sueldo: Number(values.sueldo),
    };
    setUsers([...users, newUser]);
    form.resetFields();
    message.success('Usuario registrado correctamente');
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f8f9fa', width: '100vw' }}>
      <Header style={{ background: '#212529', padding: 0, minHeight: 56, boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', height: 56, justifyContent: 'space-between' }}>
          <span style={{ color: 'white', fontSize: 20, letterSpacing: 1 }}>Mi App Bootstrap</span>
          <nav style={{ display: 'flex', gap: 32 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: 16 }}>Home</Link>
            <Link to="/usuarios" style={{ color: 'white', textDecoration: 'none', fontSize: 16 }}>Usuarios</Link>
            <Link to="/sueldos" style={{ color: 'white', textDecoration: 'none', fontSize: 16 }}>Sueldos</Link>
            <Link to="/bono" style={{ color: 'white', textDecoration: 'none', fontSize: 16 }}>Bono</Link>
            <Link to="/registro" style={{ color: 'white', textDecoration: 'none', fontSize: 16 }}>Registro</Link>
          </nav>
        </div>
      </Header>
      <Content style={{ padding: '32px 8px', maxWidth: 1000, margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/sueldos" element={<Sueldos />} />
          <Route path="/bono" element={<Bono />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center', background: '#f8f9fa' }}>
        © 2025 - Mi App de Prueba - Todos los derechos reservados.
      </Footer>
    </Layout>
  );
}

export default App;
