import React from 'react';

import {ProductCardStyles, ProductDesc, ProductImage, ProductTitle, ProductPrice} from './styles';


function ProductCard ({children, price, title, image, desc, ...props})  {
  return (
        <ProductCardStyles  {...props}>
          
          <ProductImage><img src={image} alt='product' /></ProductImage>
          <ProductPrice>$ {price}</ProductPrice>
          <ProductTitle>{title}</ProductTitle>
          <ProductDesc>{desc}</ProductDesc>
          

        </ProductCardStyles>
  )
}

export default ProductCard