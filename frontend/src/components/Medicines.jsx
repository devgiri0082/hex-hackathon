import React from "react";
import MedicineCard from "./MedicineCard";

function Medicines({medicineData, searchQuery}) {
  if(!medicineData) {
    return <div></div>
  }
  medicineData = medicineData.filter(data => {
    if(searchQuery === "" || data.name.toLowerCase().includes(searchQuery.toLowerCase())) return data
  })
    const medicineCards = medicineData.map((medicine, index) => <MedicineCard medicineId={medicine.id} key={index} medicineName={medicine.name} price={medicine.price} prevPrice={medicine.prevPrice} imageURL={medicine.imageURL} />);
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
