import React, { createContext, useState, useCallback } from "react";
import { Alert } from 'react-native';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from "../script/configFirabase";

export const EstadoGlobalProductos = createContext()

export default function ContextProductos({ children }) {
    const [dataproductos, setDataProductos] = useState([])

    const subirdato = useCallback(async () => {
        try {
            const docRef = await addDoc(collection(db, 'productos'), {
                nombre: 'Chetos',
                cantidad: 2,
                fecha: new Date(),
            })
            console.log('Documento creado con el id:', docRef.id)
            Alert.alert("Éxito", "Datos enviados correctamente")
            leerdatos()
        } catch (error) {
            console.log(error)
            Alert.alert("Error", "No se pudieron enviar los datos")
        }
    }, [leerdatos])


    const leerdatos = useCallback(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "productos"));
            const productosData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setDataProductos(productosData);
        } catch (error) {
            console.error("Error al leer datos de Firestore:", error);
        }
    }, []);

    const eliminarProducto = useCallback(async (id) => {
        try {
            await deleteDoc(doc(db, 'productos', id));
            console.log('Producto eliminado con ID:', id);
            Alert.alert("Éxito", "Producto eliminado correctamente")
            leerdatos();
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            Alert.alert("Error", "No se pudo eliminar el producto")
        }
    }, [leerdatos]);

    return (
        <EstadoGlobalProductos.Provider value={{ dataproductos, subirdato, leerdatos, eliminarProducto }}>
            {children}
        </EstadoGlobalProductos.Provider>
    )
}