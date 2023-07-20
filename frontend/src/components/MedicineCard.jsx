import React from "react";
import paracetamol from "../assets/paracetamol.png";

function MedicineCard() {
    return (
        <section className="w-full text-sm flex flex-col justify-between rounded-[10px] hover:shadow-sm cursor-pointer">
            <img src={paracetamol} className="rounded-t-md" />
            <div className="p-4 rounded-b-md bg-white text-slate-600 ">
                <h3 className="font-medium">Paracetamol 500mg</h3>
                <div className="flex justify-between">
                    <span>Rs. 40</span>
                    <span className="line-through text-slate-400">Rs. 55</span>
                </div>
            </div>
        </section>
    );
}

export default MedicineCard;
