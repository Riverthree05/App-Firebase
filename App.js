import React from 'react';
import Navegacion from './Navegacion';
import ContextProductos from './src/context/contextProductos';

export default function App() {
  return (
    <ContextProductos>
      <Navegacion />
    </ContextProductos>
  );
}