import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { API_URL } from "@env"
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Products = ({ navigation }) => {
    const { loading, data, error } = useFetch(`${API_URL}/products`)

    const handleProductSelect = id => {
        navigation.navigate('DetailPage',{id});
    };

    const renderProduct = ({ item }) =>
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />;
    }

    return (
        <FlatList
            data={data}
            renderItem={renderProduct}
        />

    );
};
export default Products;