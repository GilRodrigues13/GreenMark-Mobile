
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66CDAA',
        
       
      },
      containerLogo: {
        flex: 2,
        backgroundColor: '#66CDAA',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:90,
        left:90
      },
      textVazio:{
        flex:1,
        fontSize: 24,
        fontWeight: 'bold',
        top: -170,
        marginBottom: 12,
        color:'#351c2f',
        left:80
      },
      containerBar: {
        position: 'absolute', // Use 'absolute' para posicionar independentemente
        bottom: 0, // Posição na parte inferior da tela
        width: '100%', // Largura total
        height: 98,
        backgroundColor: '#20B2AA',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
  button:{
    marginHorizontal: 100,
  }

});
