import {useEffect, useState} from 'react';
import ProductCardGrid from '../ProductCardGrid/ProductCardGrid';

const HomePage = () => {

 const [products, setProducts]  = useState([]);  

    useEffect(() =>{
        fetch("http://localhost:5000/api/products")
        .then(response => response.json())
        .then(prods=>setProducts(prods));
    }, []);

    return(
    <div>
        {/* {products} is referance to products array*/}
    <ProductCardGrid  products={products}/>
    </div>
    )
}

export default HomePage;