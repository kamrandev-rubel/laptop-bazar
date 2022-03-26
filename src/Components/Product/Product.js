import React from 'react';
import './Product.css'
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({ product }) => {
    // console.log(product);
    return (
        <div className='product'>
            <div>

            </div>
            <img src={product.picture} alt="" />
            <h3>{product.name}</h3>
            <h4>Price: ${ product.price}</h4>
            <div>
                <button>add</button>
                <button><FaShoppingCart />add</button>
            </div>
        </div>
    );
};

export default Product;