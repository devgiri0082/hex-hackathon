const ProfileAsPatient = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formBody = {
      firstName: formData.get("firstname"),
      lastName: formData.get("lastname"),
      phoneNumber: formData.get("phonenumber"),
      address: formData.get("address"),
    };

    let response = await fetch("http://localhost:8080/users/create", {
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
     <form className="flex flex-col mt-10 space-y-8" onSubmit={handleSubmit}>
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
        <button
          className="py-3 font-semibold text-white border border-white rounded-lg bg-myblue"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  )
};

export default ProfileAsPatient;
