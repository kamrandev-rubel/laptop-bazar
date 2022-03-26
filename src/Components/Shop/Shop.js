import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    const addHandleToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product addHandleToCart={addHandleToCart} product={product} key={product.id} />)
                }
            </div>
            <div className='cart-container'>
                <h2>Seleted Items: { cart.length }</h2>
            </div>
        </div>
    );
};

export default Shop;