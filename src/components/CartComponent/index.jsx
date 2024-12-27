import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartComponent.css';
import { removeCartItem } from '../../Redux/postsSlice';

const CartComponent = () => {
  const cartItems = useSelector((state) => state.posts.cartItems);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeCartItem(id))
  }

  return (
    <div>
      <div className="cart-items">
        <div className="products">
            {cartItems.map((item, index) => (
          <div className="product" key={item.id}>
            <p>{item.body}</p>
            <h1>{item.title}</h1>
            <button className='btn' onClick={()=>removeItem(item.id)}>Remove item</button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default CartComponent;
