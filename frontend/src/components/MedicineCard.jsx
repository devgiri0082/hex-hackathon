import React from "react";
import paracetamol from "../assets/paracetamol.png";
import { useNavigate } from "react-router-dom";

function MedicineCard({medicineId, medicineName, price, prevPrice, imageURL}) {
    const navigate = useNavigate();
    return (
        <section 
        onClick={()=>{
           navigate(`/medicine-info/?id=${medicineId}`) 
        }}
        className="w-full max-w-[200px] text-sm flex flex-col justify-between rounded-[10px] cursor-pointer shadow-md overflow-hidden transition-all duration-800 group">
            <img src={imageURL} className="rounded-t-md group-hover:scale-110" />
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
