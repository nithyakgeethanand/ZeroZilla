import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BaseURL, screenHeight, screenWidth } from '../utils/constants';
import { FlatList } from 'react-native-gesture-handler';
import colors from '../utils/colors';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [catagories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const url = BaseURL + 'products/categories';
      const response = await fetch(url);
      const json = await response.json();
      setCategories(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);


  return (
    <View style={styles.container}>
      {catagories.map((item, index) =>
          <View style={styles.categorieContainer}>
            <Text key={index}  style={styles.catagorieText}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
          </View>
      )}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categorieContainer: {
    width: screenWidth - 50,
    height: screenHeight / 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: colors.blue
  },
  catagorieText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "bold"
  }
})