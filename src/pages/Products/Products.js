import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { API_URL } from "@env"
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: productData } = await axios.get(`${API_URL}/products`);
            setData(productData);
        };
         
        fetchData();
    }, []);

    const renderProduct = ({ item }) =><ProductCard product={item}/> ;
    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </SafeAreaView>
    );
};
export default Products;