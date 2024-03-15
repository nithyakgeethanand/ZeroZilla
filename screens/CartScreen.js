import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>No items in Cart</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  }
})