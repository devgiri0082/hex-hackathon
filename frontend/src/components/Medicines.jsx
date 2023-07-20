import React from "react";
import MedicineCard from "./MedicineCard";
import medicineData from "../../utils/medicineDetails.json";

function Medicines() {
    const medicineCards = medicineData.map((medicine, index) => <MedicineCard key={index} medicineName={medicine.name} price={medicine.price} prevPrice={medicine.prevPrice} />);
    return (
        <main className=" w-full min-h-full flex-wrap flex flex-col py-6 items-center">
            <div className="max-w-[1050px] w-full flex flex-col justify-start items-start">
                <div className="card-container">
                    {medicineCards}
                </div>
            </div>
        </main>
    );
}

export default Medicines;
