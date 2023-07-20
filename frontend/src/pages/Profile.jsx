/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import ProfileAsPatient from "../components/ProfileAsPatient";
import ProfileAsPharmacy from "../components/ProfileAsPharmacy";
import Navbar from "../components/Navbar";

function CreateProfile() {
  const [clicked, setClicked] = useState("patient");

  return (
    <>
    <Navbar/>
      <main className="flex items-center justify-center h-auto min-h-screen bg-no-repeat bg-cover bg-primary-gradient ">
        <div className="flex items-center justify-center my-4">
          <div className="flex flex-col px-8 py-10 border border-gray-900 rounded-lg min-w-[300px] bg-cyan-50">
            <div className="mt-1 underline text-slate-700">
              <h1 className="pb-10 text-3xl font-bold text-center">
                Fill up your additional details below:
              </h1>
            </div>
            <div className="flex items-center justify-center gap-5 p-10">
              <button
                style={
                  clicked === "patient"
                    ? {
                        color: "white",
                        backgroundColor: "#0085FF",
                        border: "none",
                      }
                    : {}
                }
                className="items-center justify-start py-3 pl-8 pr-8 overflow-hidden font-semibold border-2 rounded text-myblue bg-gray-50 group border-slate-400"
              >
                <span
                  onClick={() => {
                    setClicked("patient");
                  }}
                >
                  Patient
                </span>
              </button>
              <p className="text-xl font-bold">OR</p>
              <button
                style={
                  clicked === "pharmacy"
                    ? {
                        color: "white",
                        backgroundColor: "#0085FF",
                        border: "none",
                      }
                    : {}
                }
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-4 overflow-hidden font-semibold transition-all duration-150 ease-in-out border-2 rounded text-myblue bg-gray-50 group border-slate-400"
                onClick={() => {
                  setClicked("pharmacy");
                }}
              >
                <span className="w-full">Pharmacy</span>
              </button>
            </div>
            <p className="text-red-800">*Note: You're currently filling details as a {clicked}.</p>
            <div>
              {clicked === "patient" ? (
                <ProfileAsPatient />
              ) : (
                <ProfileAsPharmacy />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CreateProfile;
