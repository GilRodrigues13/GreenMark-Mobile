import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { signinStyles as styles } from './signinStyles';

export default function Signin() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
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

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text onPress={() => navigation.navigate('Signup')} style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

