import React from "react";
import Navbar from "../components/Navbar";
import BuyMedicine from "../components/BuyMedicine";
import MedicineBlog from "./MedicineBlog";

function MedicineInfo() {
    return (
        <main className="flex flex-col justify-center items-center gap-6">
            <Navbar />
            <BuyMedicine />
            <MedicineBlog />
        </main>
    );
}

export default MedicineInfo;
