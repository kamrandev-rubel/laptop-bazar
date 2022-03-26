import React from 'react';
import './Product.css'
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({ product, addHandleToCart }) => {
    return (
        <div className='product'>
            <div>

            </div>
            <img src={product.picture} alt="" />
            <h3>{product.name}</h3>
            <h4>Price: ${ product.price}</h4>
            <div className='cart-btn'>
                <button>Buy Now</button>
                <button onClick={() => addHandleToCart(product)}>
                    <span className='btn-text'>Add to Cart</span>
                    <FaShoppingCart /></button>
            </div>
        </div>
    );
};

export default Product;