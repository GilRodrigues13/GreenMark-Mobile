import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Kombu Alga Marinha',
      price: 39.99,
      thumbnail:
        'http://http2.mlstatic.com/D_978643-MLB48664838187_122021-I.jpg',
    },
    {
      id: 2,
      title: 'Feijão Carioca',
      price: 13.65,
      thumbnail:
        'http://http2.mlstatic.com/D_856458-MLU47586915559_092021-I.jpg',
    },
    {
      id: 3,
      title: 'Biscoito Amanteigado',
      price: 5.99,
      thumbnail:
        'http://http2.mlstatic.com/D_992697-MLU50137475081_052022-I.jpg',
    },
    {
      id: 4,
      title: 'Sabão Em Pó Lavagem Perfeita Ativo Concentrado 2,2kg Omo',
      price: 24.89,
      thumbnail:
        'http://http2.mlstatic.com/D_989655-MLU69496907615_052023-I.jpg',
    }
  ]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
          setCart(JSON.parse(cartData));
        }
      } catch (error) {
        console.error('Erro ao carregar o carrinho:', error);
      }
    };

    loadCart();
  }, []);

  const addToCart = async (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      console.log('Produto já existe no carrinho, antes:', cart);
      // Se o produto já existe no carrinho, atualize a quantidade
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      console.log('Produto já existe no carrinho, depois:', updatedCart);

      setCart(updatedCart); // Atualiza o estado do carrinho

      try {
        await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      } catch (error) {
        console.error('Erro ao salvar o carrinho no AsyncStorage:', error);
      }
    } else {
      console.log('Produto não existe no carrinho, antes:', cart);
      // Se o produto não existe no carrinho, adicione-o com quantidade 1
      const newProduct = {
        id: Date.now(),
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      };

      const updatedCart = [...cart, newProduct];
      console.log('Produto não existe no carrinho, depois:', updatedCart);
      setCart(updatedCart); // Atualiza o estado do carrinho

      try {
        await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      } catch (error) {
        console.error('Erro ao salvar o carrinho no AsyncStorage:', error);
      }
    }
  };

  return (
    <ProductsContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </ProductsContext.Provider>
  );
};
