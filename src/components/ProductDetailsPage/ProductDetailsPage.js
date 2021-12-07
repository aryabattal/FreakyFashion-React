import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  let { urlSlug } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${urlSlug}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  });
  // Use tecnic conditional rendering (product?22)
  return product ? (
    <div>
      <h3 className="product-name">{product.name}</h3>

      <div className="header-container main-content justify-content-center align-items-to-flex-start">
        <div className="v-container product-shots-container">
          <div className="product-shots">
            <img src={product.imageUrl} alt="product-shot" />
          </div>
          <div className="product-shots">
            <img src={product.imageUrl} alt="product-shot" />
          </div>
          <div className="product-shots">
            <img src={product.imageUrl} alt="product-shot" />
          </div>
        </div>

        <div className="v-container main-product-shot-container">
          <div className="main-product-shot">
            <img src={product.imageUrl} alt="" />
          </div>
        </div>
        <div className="v-container order-instructions-container">
          <h5 className="instruction-title"></h5>
          <p className="instructions">{product.description}</p>
          <p> {product.price} kr</p>
          <div className="v-container parameters-container">
            <div>
              <label for="cake-size">Size:</label>
              <select name="cake-size" id="cake-size">
                <option value="Mini">Small</option>
                <option value="Medium">Medium</option>
                <option value="Big">Larg</option>
                <option value="Enormous">X-Larg</option>
              </select>
            </div>

            <div className="purchase-button-container">
              <button
                className="purchase-button"
                onclick="alert('Product are on their way!')"
              >
                Add To Cart <i className="material-icons">shopping_cart</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div> Loading ...</div>
  );
};

export default ProductDetailsPage;
