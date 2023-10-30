import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './cartStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'

export default function Cart() {
    const navigation = useNavigation();
    const carrinhoVazio = true;
  return (
    <View style={styles.container}>

      {carrinhoVazio ?
        <Animatable.Image 
          animation="bounceIn"
          duration={1000}
          source={require('../../assets/carrinho.png')}
          style={styles.containerLogo}
          resizeMode="contain"
        /> : null}
        <Text style={styles.textVazio}>O carrinho está vazio</Text>

        <View style={styles.containerBar}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
        >
        <Icon name="home" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cart')}
        >
        <Icon name="cart" size={30} color="black" />
        
        </TouchableOpacity>
        </View>
  </View>
);
}
    


 