

import React from 'react';
import { Layout, Typography, Row, Col, Card, Button, Form, Input, Table, message, Divider } from 'antd';
import 'antd/dist/reset.css';

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
    <Layout style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <Header style={{ background: '#343a40', textAlign: 'center', padding: 0 }}>
        <div style={{ padding: 16 }}>
          <Title style={{ color: 'white', margin: 0 }} level={2}>Bienvenido a Mi App!</Title>
          <Paragraph style={{ color: 'white', margin: 0, fontSize: 16 }}>
            Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar a React + Ant Design.
          </Paragraph>
        </div>
      </Header>
      <Content style={{ padding: '32px 8px', maxWidth: 1000, margin: '0 auto' }}>
        <Card style={{ margin: '0 auto 32px', maxWidth: 800, background: '#fff' }} bordered={false}>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24}>
              <img src="https://picsum.photos/id/1015/800/300" alt="Banner" style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
            </Col>
          </Row>
        </Card>

        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={8}>
            <Card title={<span style={{ fontWeight: 600 }}>Usuarios</span>} bordered={false} style={{ minHeight: 200, background: '#f1f3f4' }}>
              <Paragraph>Gestiona el listado de usuarios registrados.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title={<span style={{ fontWeight: 600 }}>Cálculo de Sueldos</span>} bordered={false} style={{ minHeight: 200, background: '#f1f3f4' }}>
              <Paragraph>Calcula el sueldo neto de cada empleado.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title={<span style={{ fontWeight: 600 }}>Registro Rápido</span>} bordered={false} style={{ minHeight: 200, background: '#f1f3f4' }}>
              <Paragraph>Registra nuevos usuarios fácilmente.</Paragraph>
            </Card>
          </Col>
        </Row>

        <Divider />
        <Paragraph style={{ textAlign: 'center', fontSize: 16, marginBottom: 0 }}>
          Bienvenido al sistema de usuarios y nómina. Recuerda completar todos los campos antes de calcular.
        </Paragraph>
      </Content>
      <Footer style={{ textAlign: 'center', background: '#f8f9fa' }}>
        © 2025 - Mi App de Prueba - Todos los derechos reservados.
      </Footer>
    </Layout>
  );
}

export default App;
