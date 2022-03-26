import './Cart.css'
import { MdDelete } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Cart = ({ cart }) => {
    const { picture, name } = cart;
    AOS.init()
    return (
        <div data-aos="flip-up" id='cart' className='cart'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <span className='delete-icon'><MdDelete /></span>
        </div>
    );
};

export default Cart;