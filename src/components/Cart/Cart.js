import React from 'react';

const Cart = (props) => {
    const cartItem = props.cart;
    const total = cartItem.reduce((sum, ele)=>sum+ele.price,0);
    return (
        <div>
            <h5>Course Purchased: {cartItem.length}</h5>
            <h6>Course Price: {total}</h6>
        </div>
    );
};

export default Cart;