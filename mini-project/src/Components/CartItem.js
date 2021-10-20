import React from 'react';
import './cartItem.css';
import { faPlusCircle, faMinusCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem=(props)=>{

        const {name,price,qty,url}=props.product;

        return(
            <div className="cartItem">
                <div className="cartItem-left">
                    <img src={url} alt="img"/>
                </div>
                <div className="cartItem-right">
                    <div>{name}</div>
                    <div>Rs {price}</div>
                    <div>Quantity: {qty}</div>

                    <div className="cartItem-actions">
                        <FontAwesomeIcon icon={faPlusCircle} onClick={()=>props.onIncreaseQuantity(props.product)}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faMinusCircle}  onClick={()=>props.onDecreaseQuantity(props.product)}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTrash}  onClick={()=>props.onDelete(props.product.id)}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        );
}

export default CartItem;