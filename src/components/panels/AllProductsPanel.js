import React from "react";
import { PanelStyles, PanelTitle, PanelBarItems, PanelBarItem, PanelBody } from "./styles";
import {Button} from '../../ui/buttons';
import {useNavigate} from "react-router-dom";
import {ProductCard} from "components/products/productCard";



import {useGetProducts} from "hooks/useGetProducts";


function AllProductsPanel ({title,...props}) {


    let navigation = useNavigate();

    const productData = useGetProducts();

    function onHandleAdd(evt) {
        evt.preventDefault();
        navigation('add');

    
    }
    return (
        <PanelStyles>
            <PanelBarItems>
                <PanelBarItem><h3>Home &gt; All Product</h3></PanelBarItem>
                <PanelBarItem><Button onClick={onHandleAdd} bgcolor="blue" color="white">Add Product</Button></PanelBarItem>
            </PanelBarItems>
            <PanelTitle><h2>Product Listings</h2></PanelTitle>
            <PanelBody>
            {productData? productData.map(product => <ProductCard key={product.uid} product = {product} />) :<p>no product in database</p>}
                {/* <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} /> */}


                
            </PanelBody>
            
            
        </PanelStyles>
      );
}

export default AllProductsPanel;





