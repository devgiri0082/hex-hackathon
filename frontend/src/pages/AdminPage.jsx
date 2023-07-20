<<<<<<< HEAD
/* eslint-disable react/no-unescaped-entities */
=======
import { useState } from "react";

>>>>>>> 33a17e7 (add: DetailsForm)
export default function AdminPage() {
  const handleSubmit = () => {

<<<<<<< HEAD
=======
    const formBody = {
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description"),
      dosage: formData.get("dosage"),
      possibleSideEffect: formData.get("possibleSideEffect"),
      images: formData.getAll("images"),
      requiresPrescription: checked,
    };

    let response = await fetch("http://localhost:8080/medicine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formBody),
    });
    if (response.ok) {
      console.log("Submitted successfully from frontend!");
    } else {
      console.error("Error submitting form: ", response.statusText);
    }
>>>>>>> 33a17e7 (add: DetailsForm)
  };
  return (
    <>
      <main className="bg-primary-gradient bg-no-repeat bg-cover flex justify-center items-center min-h-[688px] ">
        <div className="flex items-center justify-center h-screen ">
<<<<<<< HEAD
          <div className="flex flex-col px-8 py-10 border border-gray-900 rounded-lg min-w-[450px] bg-cyan-50">
            <div className="mt-10 text-black">
              <h1 className="text-4xl font-bold">Admin Panel</h1>
              <p className="font-semibold">Medicine Information Upload!</p>
=======
          <div className="flex flex-col px-8 py-10 border border-gray-900 rounded-lg min-w-[500px] bg-cyan-50 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <div className="mt-10 underline text-slate-700">
              <h1 className="pb-10 text-5xl font-bold text-center">
                Admin Panel
              </h1>
              <p className="font-bold ">Medicine Information Upload!</p>
>>>>>>> 33a17e7 (add: DetailsForm)
            </div>
            <form className="flex flex-col mt-10 space-y-8">
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Price"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <textarea
                type="text"
                placeholder="Description"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Dosage"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Possible Side Effect"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Upload files
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="images_input"
                type="file" multiple accept="iamge/png" 
              />

              <button
                className="py-3 font-semibold text-white border border-white rounded-lg bg-myblue"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
