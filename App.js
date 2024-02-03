// Importar paquetes para el proyecto
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Label, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //paquete para navegar 
import { createStackNavigator } from '@react-navigation/stack'; //paquete para navegar dando clicks

// Importar paginas usadas
import PaginaPrincipal from './screens/pagina-principal';

const LoginScreen = ({navigation}) => {
  // crear estado para validar datos de sesion
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const handleInicioSesion = () => {
    if (usuario === 'root' && contrasena === '1234') {
      setMensajeError('');
      console.log('Inicio de sesión exitoso');
       navigation.navigate('PaginaPrincipal');
    } else {
      setMensajeError('Usuario o contraseña incorrectos');
    }
  };
  
  return (
    <View style={styles.container}>
      <Image
          style={{width: '100%',height: 242, }}
          source={require("./assets/cinta-img.jpeg")}
        /> 
         <View style={styles.formContainer}>
         <Text style={[styles.label, {fontSize: 19}]}>Usuario</Text>
          <TextInput
            style={styles.input}
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
            />
           <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={contrasena}
            onChangeText={(text) => setContrasena(text)}
            />
          <TouchableOpacity
          style={styles.button}
          onPress={handleInicioSesion}
          >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
          <Text style={styles.registrar}>Registrarse</Text>
        </View>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    //Rutas de navegacion
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">  
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(114, 28, 20, 1)',
    flex: 1,
    alignItems: 'center',
  },
   formContainer: {
    backgroundColor: 'rgba(183, 14, 14, 0.7)', 
    padding: 20,
    borderRadius: 20,
    width: '85%',
    height: '55%',
    alignItems: 'center',
  },
  label:{
    color:'white',
    width: '100%',
    marginTop:20,
    marginBottom:10,
    textAlign: 'start',
    height:20
  
  },
  input: {
    backgroundColor:'rgba(213, 162, 66, 0.4)',
    height: 50,
    color: 'white',
    fontSize:22,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'rgba(213, 162, 66, 0.61)',
    height: 40,
    width:'80%',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  registrar:{
    paddingTop:20,
    color:'white',
  }
 
});

export  default App;
