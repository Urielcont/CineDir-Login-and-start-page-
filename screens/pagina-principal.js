import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const PaginaPrincipal = () => {
    const imagenesGaleria = [
        require("../assets/padrino.jpg"),
        require("../assets/aquaman.jpg"),
        require("../assets/oppenhaimer.jpg"),
        require("../assets/oppenhaimer.jpg"),
        require("../assets/HarryPotter.jpg"),
        require("../assets/fury.jpg"),
      ];
    
      const renderGaleriaItem = ({ item }) => (
        <TouchableOpacity style={styles.imagenGaleriaContainer}>
          <Image style={styles.imagenGaleria} source={item} />
        </TouchableOpacity>
      );
  return (
    <View style={styles.container}>
      <View style={styles.textoBotonContainer}>
        <Text style={styles.textoEncimaImagen}>Harry Potter</Text>
        <Text style={styles.textoEncimaImagen}>Harry es un niño huerfano que fue reclutado por...</Text>
        <TouchableOpacity
          style={styles.botonRojo}
        
        >
          <Text style={styles.textoBoton}>Visualizar</Text>
        </TouchableOpacity>
      </View>
     
      <Image
        style={styles.ImagenInicial}
        source={require("../assets/HarryPotter.jpg")}
      />
      <Text style={styles.textoCarousel}>Peliculas Destacadas</Text>
       <Carousel
        data={imagenesGaleria}
        renderItem={renderGaleriaItem}
        sliderWidth={400}
        itemWidth={200}
        itemHeight={150}
        
      />
      <Text style={styles.textoCarousel}>Peliculas De esta semana</Text>
      <Carousel
        data={imagenesGaleria}
        renderItem={renderGaleriaItem}
        sliderWidth={400}
        itemWidth={200}
        itemHeight={150}
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImagenInicial: {
    width: '100%',
    margin:0,
    height: '40%', 
    resizeMode: 'cover',
  },
  textoBotonContainer: {
    position: 'absolute',
    top: '22%',
    width: '100%',
    alignItems: 'start',
    zIndex: 1, 
  },
  textoEncimaImagen: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
  },
  botonRojo: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
  textoCarousel:{
    color:'#000',
    fontSize:30,
    marginTop:20,
  },
  imagenGaleriaContainer: {
    marginHorizontal: 5,
    marginVertical: 7,
    borderRadius: 10,
    margin:20,
    overflow: 'hidden',
  },
  imagenGaleria: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default PaginaPrincipal;
