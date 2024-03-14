import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProductsScreen</Text>
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