import React from 'react';
import './Cart.css'
import { MdDelete } from 'react-icons/md'

const Cart = ({ cart }) => {
    const {picture, name} = cart
    return (
        <div className='delete-cart-container'>
            <div className='cart'>
                <img src={picture} alt="" />
                <p>{name}</p>
                <span className='delete-icon'><MdDelete /></span>
            </div>
        </div>
    );
};

export default Cart;