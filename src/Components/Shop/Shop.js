import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addHandleToCart = (product) => {
        const newCart = [...cart, product]
        const duplicateCart = cart.find(pd => pd.id === product.id)
        if (duplicateCart) {
            alert('hello')
        } else if (newCart.length > 4) {
             alert('enough')
        }
        else {
            setCart(newCart)
        }
    }
    return (
        <div className='shop-container'>
            <h1 className='shop-title'>Best Budget Laptop 2022</h1>
            <div className='shop'>
                <div className="product-container">
                    {
                        products.map(product => <Product addHandleToCart={addHandleToCart} product={product} key={product.id} />)
                    }
                </div>
                <div id='cart1' className='cart-container'>
                    <h2>Seleted Items: {cart.length}</h2>
                    <div id='cart-item-container'>
                        {
                            cart.map(cart => <Cart key={cart.id} cart={cart} />)
                        }
                    </div>
                    <div className='cart-btn-container'>
                        <button className='cart-btn'>Choose one for Me</button>
                        <button onClick={() => setCart([])} className='cart-btn'>Choose Again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;