import axios, { AxiosResponse } from 'axios';
import ProductData from "../ProductComponent/ProductData";
import {ProductDataResponse} from "./ProductDataResponse";
import {useEffect, useState} from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

function RecommendedProducts() {
    const axiosApi = axios.create({
        baseURL: window.location.origin,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 4000,
    });

    const getRecommendedProducts = () =>  axiosApi.get<ProductDataResponse>("http://localhost:8080/recommended_products");

    useEffect(() => {
        getRecommendedProducts().then((response: AxiosResponse<ProductDataResponse>) => setProducts(response.data.products)).catch((err: Error) => console.log("error", err));
    }, [getRecommendedProducts])

    const [products, setProducts] = useState<ProductData[]>([]);

    return products.length > 0 ? <ProductGrid products={products} /> : <div></div>;
}

export default RecommendedProducts;
