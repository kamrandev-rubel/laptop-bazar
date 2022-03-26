import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import Modal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai';
// react modal custom style 
const customStyles = {
    content: {
        position: 'relative',
        width: '35%',
        height: '25%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    
    },
};
Modal.setAppElement('#root')

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [showAddedItem, setShowAddedItem] = useState(false) 
    const [showFourItem, setShowFourItem] = useState(false) 
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // add to cart handler 
    const addHandleToCart = (product) => {
        const newCart = [...cart, product]
        const duplicateCart = cart.find(pd => pd.id === product.id)
        if (duplicateCart) {
            openModal()
            setShowFourItem(false)
            setShowAddedItem(true)
        } else if (newCart.length > 4) {
            openModal()
            setShowAddedItem(false)
            setShowFourItem(true)
        }
        else {
            setCart(newCart)
        }
    }
    // choose random item handler 
    const chooseRandomItem = () => {
        const chooseItem = cart[Math.floor(Math.random() * cart.length)]
        const chooseOneItemId = cart.filter(item => item.id === chooseItem.id)
        setCart(chooseOneItemId)
    }
    // delete icon btn handler 
    const deleteItemIcon = (id) => {
        const deleteItemFind = cart.find(item => item.id === id)
        const deleteItem = cart.filter(item => item.id !== deleteItemFind.id)
        setCart(deleteItem)
    }
    // react modal open close function 
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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
                    <h2>Selected Items: {cart.length}</h2>
                    <div id='cart-item-container'>
                        {
                            cart.map(cart => <Cart deleteItemIcon={deleteItemIcon} key={cart.id} cart={cart} />)
                        }
                    </div>
                    <div className='cart-btn-container'>
                        <button onClick={chooseRandomItem} className='cart-btn'>Choose one for Me</button>
                        <button onClick={() => setCart([])} className='cart-btn'>Choose Again</button>
                    </div>
                </div>
            </div>
            {/* react modal  */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                
            >
                <button id='modal-close-btn' className='modal-close-btn' onClick={closeModal}><AiFillCloseCircle/></button>
                {
                    showAddedItem?<h1 id='hello' className='modal-error-notify'>This item already added</h1>:null

                }
                {
                    showFourItem?<h1>You can add item only four item</h1>:null
                }
                
            </Modal>
        </div>
    );
};

export default Shop;