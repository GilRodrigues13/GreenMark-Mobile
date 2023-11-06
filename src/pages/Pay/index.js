import React from 'react';
import { View, Image, Text} from 'react-native';
import { styles } from './payStyles'

export default function Pay() {
  return (
    <View style={styles.container}>
    <Text style={styles.TextPix}>Faz o Pix!</Text>
      <Image
        source={require('../../assets/qrcode.jpg')} 
        style={styles.qrCode}
      />
    </View>
  );
}