import styled from 'styled-components';




const ProductCardStyles  = styled.section`
    width: 25rem;
    height: 45rem;
    background-color: white;
    padding: 0.5rem;
    margin: 1.5rem 1.5rem;

    button {
        margin-left: 2rem;
    }
`;

const ProductPrice = styled.p`
    font-size:2rem;
    color: #546E7A;;
    font-weight: bolder;
`;

const ProductDesc = styled.p`
    height: 17rem;
`;

const ProductTitle = styled.h3`
    font-size:1.75rem;
    color:#374151;
    font-weight: bolder;
    margin-bottom:1rem;
    height: 4rem;
`;

const ProductImage = styled.div`
    margin-bottom: 1rem;
    width: 100%;
    img{
        width: 100%;
        height: auto;
    }
`;



export {ProductCardStyles, ProductDesc, ProductImage, ProductTitle, ProductPrice}