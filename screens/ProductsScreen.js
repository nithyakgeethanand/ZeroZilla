import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { useQuery } from 'react-query';
import React, { useState } from 'react'
import { getAllProductsByCategory, getAllProducts } from '../queries/products';
import colors from '../utils/colors';
import LoadingElement from '../components/LoadingElement';
import ErrorElement from '../components/ErrorElement';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = ({ route }) => {
  const navigation = useNavigation();

  // Get category Id
  const id = route.params ? route.params.id : null;

  // If Id is set, Get all products by category id else get all products
  const { data, isLoading, isError } =
    id ? useQuery("getProductsByCategory", () => getAllProductsByCategory(id)) :
      useQuery("getProducts", getAllProducts);

  const [searchQuery, setSearchQuery] = useState('');

  if (isLoading) {
    return <LoadingElement />;
  }

  if (isError) {
    return <ErrorElement />;
  }

  const filteredData = data.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { id: item.id })}>
        <View style={styles.flatListConatiner}>
          <Image
            src={item.image}
            style={styles.productPoster}
          />
          <View style={styles.productDesc}>
            <Text style={styles.productHeader}>{item.title}</Text>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 25,
        fontWeight: "300",
        padding: 20
      }}>{id ? id.charAt(0).toUpperCase() + id.slice(1) : 'All products'}</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder='Search products'
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList data={filteredData} renderItem={renderItem} />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    margin: 10,
  },
  flatListConatiner: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  productPoster: {
    width: 150,
    height: 150,
    alignContent: 'center',
    borderRadius: 10,
    resizeMode: "contain"
  },
  productHeader: {
    fontSize: 20,
    fontWeight: '100',

  },
  productDesc: {
    padding: 15,
    width: 200,
  },
  priceText: {
    fontSize: 15,
    fontWeight: "200",
    paddingTop: 5
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: colors.textInputBorderColor,
    borderRadius: 5,
    height: 50,
    paddingLeft: 10,
    marginBottom:10
  }

})
