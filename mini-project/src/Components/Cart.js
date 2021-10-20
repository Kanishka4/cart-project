import React from 'react';
import './cartItem.css';
import CartItem from './CartItem';


const Cart=(props)=>{

    
        const {products}=props;
        return (
            <div>
                   { 
                        products.map((product) => {
                                return <CartItem product={product}
                                 key={product.id} 
                                onIncreaseQuantity={props.onIncreaseQuantity} 
                                onDecreaseQuantity={props.onDecreaseQuantity}
                                onDelete={props.onDelete}/>
                            })
                }
            </div>
        );
}

export default Cart;