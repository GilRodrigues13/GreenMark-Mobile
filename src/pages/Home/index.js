import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './homeSyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.containerBar}>
        <TouchableOpacity
        style={styles.button}
        nPress={() => navigation.navigate('Home')}
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
    


 