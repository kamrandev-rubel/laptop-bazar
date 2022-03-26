import React from 'react';
import './Product.css'
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Product = ({ product, addHandleToCart }) => {
    const { name, picture, price } = product;
    AOS.init();
    return (
        <div data-aos="fade-up" className='product'>
            <div className='rating-container'>
                <span> <span className='heart'><FaHeart /></span> 222</span>
                <span className='discount'>30% Off</span>
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