import React from "react";
import paracetamol from "../assets/paracetamol.png";

function MedicineCard({medicineName, price, prevPrice}) {
    return (
        <section className="w-full max-w-[200px] text-sm flex flex-col justify-between rounded-[10px] hover:shadow-sm cursor-pointer shadow-md">
            <img src={paracetamol} className="rounded-t-md" />
            <div className="p-4 rounded-b-md bg-white text-slate-600 ">
                <h3 className="font-medium">{medicineName}</h3>
                <div className="flex justify-between">
                    <span className="text-myblue">{price}</span>
                    <span className="line-through text-slate-400">{prevPrice}</span>
                </div>
            </div>
        </section>
    );
}

export default MedicineCard;
