import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BuyMedicine from "../components/BuyMedicine";
import MedicineBlog from "./MedicineBlog";
import { useSearchParams } from "react-router-dom";
import medicineData from "../../utils/medicineDetails.json";
import { useNavigate } from "react-router-dom";
function MedicineInfo() {
  const [searchParams] = useSearchParams();
  searchParams.get("id");
  const navigate = useNavigate();
  let [currentMedicine, setCurrentMedicine] = useState();
  useEffect(() => {
  if(!searchParams.get("id")) {
    navigate("/medicines")
  }
  setCurrentMedicine(medicineData.find((eachMedicine) => eachMedicine.id === searchParams.get("id")))
  }, [])
    console.log(currentMedicine)
    return (
        <main className="flex flex-col justify-center items-center gap-6">
            <Navbar />
            <BuyMedicine />
            <MedicineBlog />
        </main>
    );
}

export default MedicineInfo;
