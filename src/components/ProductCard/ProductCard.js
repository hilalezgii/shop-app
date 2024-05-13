import React from "react";
import { View, Text, Image,TouchableWithoutFeedback } from "react-native";
import styles from './ProductCard.style'
const ProductCard = ({ product,onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.image }} 
                />
                <View style ={styles.body_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price} TL</Text>
                </View>
        </View>
        </TouchableWithoutFeedback>
    );
};
export default ProductCard;


/*

{
    "id"= 1,
    "title"= "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price"= 109.95,
    "description"= "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category"= "men's clothing",
    "image"= "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating"= {
      "rate": 3.9,
      "count": 120
    }
  }
  */