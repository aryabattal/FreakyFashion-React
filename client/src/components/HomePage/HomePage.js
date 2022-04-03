import {useEffect, useState} from 'react';

import Hero from '../Hero/Hero';
import Statistics from '../Statistics/Statistics';
import ProductCardGrid from '../ProductCardGrid/ProductCardGrid';

const HomePage = () => {

 const [pageData, setPageData]  = useState(null);  

    useEffect(() =>{
        fetch("http://localhost:5000/api/pages/home")
        .then(response => response.json())
        .then(data=>setPageData(data));
    }, []);

    return pageData && (
    <div>
        <Hero {...pageData.hero}
        /* alternative:
         heading ={pageData.hero.heading}
        description={pageData.hero.description}
        imageUrl={pageData.hero.imageUrl} */
        />
        <Statistics  {...pageData} />

        {/* {products} is referance to products array
                 products={products}*/}
    <ProductCardGrid {...pageData} />
    </div>
    )
}

export default HomePage;