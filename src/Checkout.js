import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <div className='checkout__title'>
                    <h1>Hello, {user?.email}</h1>
                    <h2>Your Shopping Basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <h2><Subtotal /></h2>
            </div>
        </div>

    )
}

export default Checkout