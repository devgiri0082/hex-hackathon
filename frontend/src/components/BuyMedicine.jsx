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
              <main className="w-full">
            <section className="flex gap-2 bg-slate-50 border-2 max-w-[1050px] m-auto">
                {/* <div className="m-auto"> */}
                    <div className="p-4">
                        <img src={sinex} className="w-60" />
                    </div>
                    <div className="p-6 flex flex-col items-start justify-between">
                        <div className="text-upper flex flex-col gap-1 border-b-myblue border-b-2 pb-2 mb-2">
                            <div className="text-xl font-medium">Paracetamol</div>
                            <div className="text-myblue">Antibiotics</div>
                            <div>Brand: Afrin No Drip Sinus, Allerest 12 Hour Nasal Spray</div>
                        </div>
                        <div className="text-lower flex flex-col gap-3 items-start ">
                            <div className="flex gap-4">
                                <span className="text-myblue">Rs. 30</span>
                                <span className="text-slate-500 line-through">Rs. 45</span>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <span>Quantity</span>
                                <CartButton
                                    quantity={product.quantity}
                                    handleCartChange={handleCartChange}
                                />
                            </div>
                    <div className="p-6 flex flex-col items-start justify-between">
                        <div className="text-upper flex flex-col gap-1 border-b-myblue border-b-2 pb-2 mb-2">
                            <div className="text-xl font-medium">Paracetamol</div>
                            <div className="text-myblue">Antibiotics</div>
                            <div>Brand: Afrin No Drip Sinus, Allerest 12 Hour Nasal Spray</div>
                        </div>
                        <div className="text-lower flex flex-col gap-3 items-start ">
                            <div className="flex gap-4">
                                <span className="text-myblue">Rs. 30</span>
                                <span className="text-slate-500 line-through">Rs. 45</span>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <span>Quantity</span>
                                <CartButton
                                    quantity={product.quantity}
                                    handleCartChange={handleCartChange}
                                />
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
