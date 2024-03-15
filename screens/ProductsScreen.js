import { View, Text, StyleSheet } from 'react-native'
import { useQuery } from 'react-query';
import React from 'react'
import { getAllProductsByCategory } from '../queries/products';

const ProductsScreen = ({route}) => {

  // Get category Id
  const { id } = route.params;

  // Get all products by category id
  const { data, isLoading, isError } = useQuery("getProductsByCategory", () => getAllProductsByCategory(id));

  console.log(data);
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  }
})