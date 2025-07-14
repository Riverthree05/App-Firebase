import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import {db} from '../../script/configFirabase';
import { collection, addDoc } from 'firebase/firestore';



export default function  ScreenHome ()  {

const sendData = async () => {
  try {
    console.log('🔄 Iniciando envío de datos...');
    console.log('📊 Database instance:', db);
    
    const docRef = await addDoc(collection(db, "productos"), {
      nombre: "Cheetos",
      date: new Date(),
      timestamp: Date.now(),
      createdAt: new Date().toISOString()
    });
    
    console.log("✅ Document written with ID: ", docRef.id);
    Alert.alert("Éxito", `Documento creado correctamente con ID: ${docRef.id}`);
    
  } catch (error) {
    console.error("❌ Error completo: ", error);
    console.error("❌ Error code: ", error.code);
    console.error("❌ Error message: ", error.message);
    
    let errorMessage = "Error desconocido";
    if (error.code) {
      switch (error.code) {
        case 'permission-denied':
          errorMessage = "Sin permisos para escribir en la base de datos";
          break;
        case 'unavailable':
          errorMessage = "Servicio no disponible, verifica tu conexión";
          break;
        case 'unauthenticated':
          errorMessage = "Usuario no autenticado";
          break;
        default:
          errorMessage = `Error: ${error.message}`;
      }
    } else {
      errorMessage = error.message || "Error de conexión";
    }
    
    Alert.alert("Error", errorMessage);
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>
      <Button
          title="Mandar Datos"
          onPress={() => sendData()}/>
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