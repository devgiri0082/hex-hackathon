import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Medicines from "../components/Medicines";
import medicineData from "../../utils/medicineDetails.json";

function MedicineList() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  }
  console.log(searchQuery)
  console.log(medicineData)
    return (
        <main className="flex flex-col gap-4">
            <Navbar />
            <SearchBar searchQuery={searchQuery} handleSearchQuery={handleSearchQuery}/>
            <Medicines searchQuery={searchQuery} medicineData={medicineData} />
        </main>
    );
}

export default MedicineList;
