import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroArea from "./../components/HeroArea";
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);
    let user = async() => {
      setLoading(true);
      const token = await getToken({template: "jwt-hex"});
      const response = await fetch('http://localhost:8080/users', 
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          mode: "cors",
        },
      }
      );
      const body = await response.json();
      // console.log({body: res});
      if(!body.exist) navigate('/create-profile')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setLoading(false);
      
    }
    useEffect(() => {
      user()
    }, [])
    return (
      <>
      {
        !loading &&
        <main className="flex flex-col items-center justify-center">
        <Navbar />
        <HeroArea />
        </main>
      }  {
        loading &&
        <div className="grid place-center h-screen w-screen">
          <div>Loading</div>
        </div>
      }
      </>
    );
};

export default Homepage;
