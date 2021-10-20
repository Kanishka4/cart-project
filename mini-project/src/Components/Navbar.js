import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css";

const Navbar=(props)=>{
       return(
                <div className="nav container-fluid">
                    <div className="carticonContainer">
                            <FontAwesomeIcon icon={faShoppingCart} className="cart"></FontAwesomeIcon>
                            <span className="cartCount">{props.count}</span>
                        </div>
                </div>
       )
}

export default Navbar;