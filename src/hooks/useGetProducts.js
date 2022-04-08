import {ref, get} from 'firebase/database';
import {useState, useEffect} from "react";
import {db} from 'libs/firebase';

function useGetProducts() {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        async function getProductData(){
            const productRef = ref(db, 'coffee');
            const productSnapShot = await get(productRef);
            setProductData(Object.values(productSnapShot.val()));
        }

        getProductData();
    }, [])

    return productData;
}

export {useGetProducts};