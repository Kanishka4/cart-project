import React from 'react';
import './cartItem.css';

class CartItem extends React.Component{
    render(){
        return(
            <div className="cartItem">
                <div className="cartItem-left">
                    <img alt="img"/>
                </div>
                <div className="cartItem-right">
                    <div>Name</div>
                    <div>Price</div>
                    <div>Quantity</div>

                    <div className="cartItem-actions">
                        <div>+</div>
                        <div>-</div>
                        <div>del</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;