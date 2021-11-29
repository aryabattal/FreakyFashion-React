import ProductCardGridCss from "./ProductCardGrid.css";

const ProductCardGrid =({products})=>{
    return(
    <section className="">
      <h1 className="our-product-heading">Populära Produkter</h1>
      <div className="product-container">

        {products.map(product =>(

            <div key={product.id} className="v-container">
                <a href="">
                <img className="main-img" src={product.imageUrl} width="370" height="350" />
                </a>
                <div className="product-text-container flex-direction-row">
                    <h4>{product.name}</h4>
                    <h4>{product.price} kr</h4>
                </div>
            </div>

        ))}
    
     </div>
    </section>
     )
  }
  
  export default ProductCardGrid;