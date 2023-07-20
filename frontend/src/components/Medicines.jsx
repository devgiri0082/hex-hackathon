import React from "react";
import MedicineCard from "./MedicineCard";

function Medicines() {
    return (
        <main className="bg-slate-200 w-full min-h-full flex-wrap flex flex-col py-6 items-center">
            <div className="max-w-[1050px] w-full flex flex-col justify-start items-start">
                <div className="card-container">
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                    <MedicineCard />
                </div>

            </div>
        </main>
    );
}

export default Medicines;
