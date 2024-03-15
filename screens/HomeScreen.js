import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { BaseURL, screenHeight, screenWidth } from '../utils/constants';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import LoadingElement from '../components/LoadingElement';
import ErrorElement from  '../components/ErrorElement';
import { getAllCategories } from '../queries/products';


const HomeScreen = () => {
  const navigation = useNavigation();

   // Get all Categories
   const { data, isLoading, isError } = useQuery('getCategories', getAllCategories);

   if (isLoading) {
       return <LoadingElement />;
   }

   if (isError) {
      return <ErrorElement />;
   }


  return (
    <View style={styles.container}>
      {data.map((item, index) =>
        <TouchableOpacity onPress={() => navigation.navigate("ProductsScreen", { id: item })} key={index}>
          <View style={styles.categorieContainer}>
            <Text style={styles.catagorieText}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
          </View>
        </TouchableOpacity>
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