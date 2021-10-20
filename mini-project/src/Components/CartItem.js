import React from 'react';
import './cartItem.css';
import { faPlusCircle, faMinusCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CartItem extends React.Component{

    
    render(){
        const {name,price,qty,url}=this.props.product;
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
                        <FontAwesomeIcon icon={faPlusCircle} onClick={()=>this.props.onIncreaseQuantity(this.props.product)}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faMinusCircle}  onClick={()=>this.props.onDecreaseQuantity(this.props.product)}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTrash}  onClick={()=>this.props.onDelete(this.props.product.id)}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;