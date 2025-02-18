import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <section id="section-products" className="section-products">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h2>Popular Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-6 col-lg-4">
            <div id="product-1" className="single-product">
              <div className="part-1">
                <img src="https://i.pinimg.com/736x/8b/6d/83/8b6d83fb56ddb329d4656168533d6816.jpg" alt="Product 1" />
              </div>
              <div className="part-2">
                <h3 className="product-title">Maggie 70g</h3>
                <h4 className="product-old-price">₹14</h4>
                <h4 className="product-price">₹13</h4>

              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-6 col-lg-4">
            <div id="product-2" className="single-product">
              <div className="part-1">
                <img src="https://i.pinimg.com/736x/8b/6d/83/8b6d83fb56ddb329d4656168533d6816.jpg" alt="Product 2" />
              </div>
              <div className="part-2">
                <h3 className="product-title">Maggie 220g</h3>
                <h4 className="product-price">₹24</h4>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-6 col-lg-4">
            <div id="product-3" className="single-product">
              <div className="part-1">
                <img src="https://i.pinimg.com/736x/8b/6d/83/8b6d83fb56ddb329d4656168533d6816.jpg" alt="Product 3" />
              </div>
              <div className="part-2">
                <h3 className="product-title">Maggie 340g</h3>
                <h4 className="product-old-price">₹58</h4>
                <h4 className="product-price">₹55</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
