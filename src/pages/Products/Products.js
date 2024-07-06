import React from "react";
import { FlatList, View } from "react-native";
import { API_URL } from "@env"
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useDispatch } from "react-redux";

const Products = ({ navigation }) => {
    const dispatch = useDispatch();
    const { loading, data, error } = useFetch(`${API_URL}/products`);

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', { id });
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