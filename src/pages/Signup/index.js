import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { signupStyles as styles } from './signupStyles';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Junte-se a nós</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
         <Text style={styles.title}>Nome</Text>
         <TextInput 
         placeholder='Digite seu Nome'
        style={styles.input}
            />

          <Text style={styles.title}>Email</Text>
          <TextInput 
          placeholder='Digite seu Email'
          style={styles.input}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput 
          placeholder='Digite sua senha'
          style={styles.input}
          />

          <TouchableOpacity  
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          
      </Animatable.View>
    </View>
  )
}

