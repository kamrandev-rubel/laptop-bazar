import React from 'react';
import './Product.css'
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({ product, addHandleToCart }) => {
    const { name, picture, price } = product;
    return (
        <div className='product'>
            <div>

            </div>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
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