import React from "react";
import DefaultPage from "../DefaultPage";
import { useParams } from "react-router-dom";

function Product(){
    const {id} = useParams();
    return (
        <DefaultPage>
            <h1>Product Page</h1>
            <p>Loading Information for product {id}</p>
        </DefaultPage>
    )
}

export default Product;