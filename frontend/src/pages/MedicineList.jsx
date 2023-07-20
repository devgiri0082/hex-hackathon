import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Medicines from "../components/Medicines";

function MedicineList() {
    return (
        <main className="flex flex-col gap-4">
            <Navbar />
            <SearchBar />
            <Medicines />
        </main>
    );
}

export default MedicineList;
