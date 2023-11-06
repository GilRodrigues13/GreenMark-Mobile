import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';
import { ProductsProvider } from './src/Context/ProductsContext';


export default function App() {
  return (
    <ProductsProvider>
    <NavigationContainer>
      <StatusBar backgroundColor="#66CDAA" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
    </ProductsProvider>
  );
}


