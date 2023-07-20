import { useState } from "react";

export default function AdminPage() {
  const [checked, setChecked] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formBody = {
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description"),
      dosage: formData.get("dosage"),
      possibleSideEffect: formData.get("possibleSideEffect"),
      images: formData.getAll("images"),
      requiresPrescription: checked,
    };

    let response = await fetch("http:localhost:8080/medicine", {
      method: "POST",
      body: formBody,
    });
    if (response.ok) {
      console.log("Submitted successfully from frontend!");
    } else {
      console.error("Error submitting form: ", response.statusText);
    }
  };

  return (
    <>
      <main className="bg-primary-gradient bg-no-repeat bg-cover flex justify-center items-center min-h-[688px] ">
        <div className="flex items-center justify-center h-screen ">
          <div className="flex flex-col px-8 py-10 border border-gray-900 rounded-lg min-w-[500px] bg-cyan-50">
            <div className="mt-10 text-black">
              <h1 className="text-4xl font-bold">Admin Panel</h1>
              <p className="font-semibold">Medicine Information Upload!</p>
            </div>
            <form
              className="flex flex-col mt-10 space-y-8"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Dosage"
                name="dosage"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Possible Side Effect"
                name="possibleSideEffect"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Upload files
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                multiple
                accept="image/png, image/jpeg, image/jpg"
                name="images"
              />
              <div className="flex items-center select-none">
                <input
                  type="checkbox"
                  name="requiresPrescription"
                  value={checked}
                  onClick={() => {
                    setChecked(!checked);
                  }}
                  id="link-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Requires prescription?
                </label>
              </div>
              <button
                className="py-3 font-semibold text-white border border-white rounded-lg bg-myblue"
                type="submit"
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