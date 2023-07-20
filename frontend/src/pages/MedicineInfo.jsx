import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BuyMedicine from "../components/BuyMedicine";
import MedicineBlog from "./MedicineBlog";
import { useSearchParams } from "react-router-dom";
import medicineData from "../../utils/medicineDetails.json";
import { useNavigate } from "react-router-dom";
function MedicineInfo() {
  const [product, setProduct] = useState({ quantity: 0 });
  function handleCartChange(action) {
    const { quantity } = product;
    const lowerLimit = 0;
    const upperLimit = 5;
    if (action === "increment" && quantity < upperLimit) {
      console.log("heheh");
      setProduct((oldProduct) => ({
        ...oldProduct,
        quantity: quantity + 1,
      }));
    } else if (action === "decrement" && quantity > lowerLimit) {
      setProduct((oldProduct) => ({
        ...oldProduct,
        quantity: quantity - 1,
      }));
    }
  }
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
            <BuyMedicine product={product} handleCartChange={handleCartChange} medicine={currentMedicine}/>
            <MedicineBlog medicine={currentMedicine} />
        </main>
    );
}

export default MedicineInfo;
