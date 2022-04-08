import React, {useState}from 'react';

import {AddProductStyles} from './styles';
import {ProductEditor} from "components/products/ProductEditor";
import {useNumberFormat} from 'hooks/useNumberFormat';
import PlaceHoderImage from 'assest/images/placeholder.png';

import {useAddNewProduct} from 'hooks/useAddNewProduct';
import {EditorFeedBack} from 'components/products/EditorFeedBack';

const defaults={
  desc: `Add the product description here.`,
  name: "Product Name",
  price: 123.45
}


function AddProduct ({children, ...props})  {

  const [isWriting, setIsWriting] = useState(false);
  const [productName, setProductName] = useState(defaults.name);
  const [productPrice, setProductPrice] = useState(defaults.price);
  const [productImage, setProductImage] = useState({previewImage:PlaceHoderImage, file:null});
  const [productDesc, setProductDesc] = useState(defaults.desc);

  const [loading, productLoader] = useAddNewProduct();

  const formatter = useNumberFormat();

  function handleProductName(name){
    setProductName(name);
  }
  function handleProductPrice(price){
    setProductPrice(formatter(price));
  }
  function handleProductDesc(desc){
    setProductDesc(desc);
  }
  function handleSubmit (evt) {
    evt.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDesc
    }
    setIsWriting(true);
    productLoader(productData, productImage.file);
    setProductDesc(defaults.desc);
    setProductImage({previewImage:PlaceHoderImage, file:null});
    setProductName(defaults.name);
    setProductPrice(defaults.price);
  }

  if(isWriting) {
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting} />
  } else {
    return (
      <AddProductStyles  {...props}>
         <ProductEditor 
          productName={productName} handleProductName={handleProductName} 
          productPrice={productPrice} handleProductPrice={handleProductPrice} 
          productImage={productImage} setProductImage={setProductImage} 
          productDesc={productDesc} handleProductDesc={handleProductDesc} 
          handleSubmit={handleSubmit}
          />

      </AddProductStyles>
    )
  }

  
}

export default AddProduct