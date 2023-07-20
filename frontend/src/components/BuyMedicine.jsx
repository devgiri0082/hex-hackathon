import  { useState } from "react";
import { BiSolidCartAlt } from "react-icons/bi";
import sinex from "../assets/sinex.png";
import CartButton from "./CartButton";

function BuyMedicine() {
    const [product, setProduct] = useState({ quantity: 0 });
    function handleCartChange(action) {
        const { quantity } = product;
        const lowerLimit = 0;
        const upperLimit = 5;
	console.log("quantity is ", quantity)
        if (action === "increment" && quantity < upperLimit) {
            setProduct((oldProduct) => ({
                ...oldProduct,
                quantity: quantity + 1,
            }));
        } else if (action === "decrement" && quantity > lowerLimit) {
            setProduct((oldProduct) => ({
                ...oldProduct,
                quantity: quantity - 1,
            }));
        }
    }
    return (
        <section className="flex gap-2 border-2 bg-slate-50">
            <div className="p-4">
                <img src={sinex} className="w-60" />
            </div>
            <div className="flex flex-col items-start justify-between p-6">
                <div className="flex flex-col gap-1 pb-2 mb-2 border-b-2 text-upper border-b-myblue">
                    <div className="text-xl font-medium">Paracetamol</div>
                    <div className="text-myblue">Antibiotics</div>
                    <div>Brand: Afrin No Drip Sinus, Allerest 12 Hour Nasal Spray</div>
                </div>
                <div className="flex flex-col gap-2 text-lower">
                    <div className="flex gap-4">
                        <span className="text-myblue">Rs. 30</span>
                        <span className="line-through text-slate-500">Rs. 45</span>
                    </div>
                    <div>
                        <span>Quantity</span>
                        <CartButton quantity={product.quantity} handleCartChange={handleCartChange} />
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 text-white rounded-md  bg-myblue">
                        <BiSolidCartAlt />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BuyMedicine;
