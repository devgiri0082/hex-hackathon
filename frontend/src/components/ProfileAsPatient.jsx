import { useAuth } from "@clerk/clerk-react"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ProfileAsPatient = () => {
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
    let token = await getToken({template: "jwt-hex"});

    let response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        mode: "cors",
      },
      body: JSON.stringify({
        firstName: e.target.firstname.value,
        lastName: e.target.lastname.value,
        phoneNumber: e.target.phonenumber.value,
        address: e.target.address.value,
        type: 'patient'
      }),
    });
    if (response.ok) {
      console.log("Submitted successfully from frontend!");
      navigate('/medicines')
    } else {
      console.error("Error submitting form: ", response.statusText);
      throw new Error('Error');
    }
    setLoading(false);
    } catch(err) {
      console.log(err);
      setLoading(false);
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
          disabled = {isLoading}
          className="py-3 font-semibold text-white border border-white rounded-lg bg-myblue"
          type="submit"
        >
          {!isLoading ? 'Submit' : "Submitting..."}
        </button>
      </form>
    </>
  )
};

export default ProfileAsPatient;
