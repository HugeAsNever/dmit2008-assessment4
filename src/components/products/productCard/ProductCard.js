import React from 'react';

import {ProductCardStyles, ProductDesc, ProductImage, ProductTitle, ProductPrice} from './styles';


function ProductCard ({children, product, ...props})  {
  const{productName, productPrice, imageUrl, productDesc} = {...product};
  return (
        <ProductCardStyles  {...props}>
          
          <ProductImage><img src={imageUrl} alt='product' /></ProductImage>
          <ProductPrice>$ {productPrice}</ProductPrice>
          <ProductTitle>{productName}</ProductTitle>
          <ProductDesc>{productDesc}</ProductDesc>
          

        </ProductCardStyles>
  )
}

export default ProductCard