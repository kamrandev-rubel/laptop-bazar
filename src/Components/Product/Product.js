import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    // console.log(product);
    return (
        <div className='product'>
            <div>

            </div>
            <img src={product.picture} alt="" />
            <h3>{product.name}</h3>
            <h4>{ product.price}</h4>
            <div>
                <button>add</button>
                <button>add</button>
            </div>
        </div>
    );
};

export default Product;