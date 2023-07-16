import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Order.css'

function Order({ order }) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p className='order__id'>
            <small>{order.id}</small>
        </p>

        {order.data && order.data.basket?.map(item => (
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
        ))}
    </div>
  )
}

export default Order