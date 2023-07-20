const ProfileAsPharmacy = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formBody = {
      firstName: formData.get("firstname"),
      lastName: formData.get("lastname"),
      businessName: formData.get("businessname"),
      phoneNumber: formData.get("phonenumber"),
      address: formData.get("address"),
      panNumber: formData.get("pannumber"),
      vatNumber: formData.get("vatnumber"),
      panImageUrl: formData.get("panimageurl"),
      vatImageUrl: formData.get("vatimageurl"),
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
  };

  return (
    <>
      <form className="flex flex-col mt-5 space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
        />
        <input
          type="text"
          placeholder="Business Name"
          name="businessname"
          className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phonenumber"
          className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
        />
        <input
          type="text"
          placeholder="Pan Number"
          name="pannumber"
          className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
        />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Upload Pan Card Image:
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          multiple
          accept="image/png, image/jpeg, image/jpg"
          name="panimageurl"
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Upload Vat Bill Image:
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          multiple
          accept="image/png, image/jpeg, image/jpg"
          name="vatimageurl"
        />
        <button
          className="py-3 font-semibold text-white border border-white rounded-lg bg-myblue"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ProfileAsPharmacy;
