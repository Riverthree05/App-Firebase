import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import React, {useContext} from 'react'
import {EstadoGlobalProductos} from '../../context/contextProductos'

export default function  ScreenHome ()  {

  const {dataproductos, subirdato, leerdatos, eliminarProducto} = useContext(EstadoGlobalProductos);

  React.useEffect(() => {
    if (leerdatos) {
      leerdatos();
    }
  }, [leerdatos])

  console.log("dataproductos", dataproductos);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>
      <Button
          title="Mandar Datos"
          onPress={() => subirdato()}/>

          {
            dataproductos && dataproductos.length > 0 ? (
              dataproductos.map((producto, index) => (
                <View key={index} style={{marginTop: 10, padding: 10, borderWidth: 1}}>
                  <Text>{producto.nombre} | {producto.fecha ? new Date(producto.fecha.seconds * 1000).toLocaleDateString() : 'Sin fecha'}</Text>
                  <Button
                    title="eliminar"
                    onPress={() => eliminarProducto(producto.id)}
                  />
                </View>
              ))
            ) : (
              <Text>No hay productos</Text>
            )
          }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})