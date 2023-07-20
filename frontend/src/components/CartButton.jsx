import { useState } from "react";
// import "./CartButton.css";

function CartButton({ quantity = 0, handleCartChange }) {
    return (
        <div>
            <button
                className="cart-btn cart-decrement py-1 px-4 font-medium rounded-l-md border-2 "
                onClick={() => {
                    handleCartChange("decrement");
                }}
            >
                -
            </button>
<button className="cart-btn cart-quantity px-4 border-y-2 p-1">{quantity}</button>
            <button
                className="cart-btn cart-increment rounded-r-md py-1 px-4 border-2"
                onClick={() => {
                    handleCartChange("increment");
                }}
            >
                +
            </button>
        </div>
    );
}

export default CartButton;
