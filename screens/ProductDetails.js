import {
    View, Text, StyleSheet, Image
} from 'react-native'
import React from 'react'
import LoadingElement from '../components/LoadingElement';
import ErrorElement from '../components/ErrorElement';
import { useQuery } from 'react-query';
import { screenWidth, screenHeight } from '../utils/constants';
import colors from '../utils/colors';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { getProductDetailsById } from '../queries/products';

const ProductDetails = ({ route }) => {

    // Get product Id
    const { id } = route.params;

    console.log("id: ", id)

    // If Id is set, Get all products by category id else get all products
    const { data, isLoading, isError } = useQuery("getProductDetails", () => getProductDetailsById(id));

    if (isLoading) {
        return <LoadingElement />;
    }

    if (isError) {
        return <ErrorElement />;
    }

    return (
        <View style={styles.container}>
            <Image
                src={data.image}
                style={styles.imagePoster}
            />
            <Text style={styles.productDetailHeader}>{data.title}</Text>
            <View>
                <View style={styles.productDetails}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.category}>{data.category}</Text>
                    </View>
                    <Text style={styles.price}>$ {data.price}</Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={styles.ratingContainer}>
                    <StarRatingDisplay rating={data.rating.rate} />
                        <Text style={styles.rating}>{data.rating.rate}</Text>
                        <Text style={styles.rating}>({data.rating.count})</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.productDescription}>{data.description}</Text>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imagePoster: {
        width: screenWidth - 50,
        height: screenHeight / 3,
        alignContent: 'center',
        resizeMode: 'contain',
        borderRadius: 10
    },
    productDetailHeader: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 10,
        textAlign: 'center',
        padding: 20
    },
    category: {
        fontSize: 15,
        marginLeft: 5,
        fontWeight: '200'
    },
    productDescription: {
        fontSize: 15,
        fontWeight: '200',
        marginTop: 20,
        textAlign: "left",
        padding: 20
    },
    rating: {
        fontSize: 15,
        fontWeight: '100'
    },
    price: {
        fontSize: 20,
        fontWeight: '100'
    },
    ratingContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productDetails: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    categoryContainer: {
        borderWidth:1, 
        borderRadius:20, 
        padding:5, 
        borderColor:colors.darkGray
    }

})