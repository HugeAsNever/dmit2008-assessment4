import React from 'react';

import {ProductCardStyles, ProductDesc, ProductImage, ProductTitle, ProductPrice} from './styles';
import {Button} from 'ui/buttons';


function ProductCard ({children, product, ...props})  {
  const{productName, productPrice, imageUrl, productDesc} = {...product};
  return (
        <ProductCardStyles  {...props}>
          
          <ProductImage><img src={imageUrl} alt='product' /></ProductImage>
          <ProductPrice>$ {productPrice}</ProductPrice>
          <ProductTitle>{productName}</ProductTitle>
          <ProductDesc>{productDesc}</ProductDesc>
          <Button bgcolor="blue" color="white">Edit</Button>
          <Button bgcolor="Red" color="white">Delete</Button>

        </ProductCardStyles>
  )
}

export default ProductCard