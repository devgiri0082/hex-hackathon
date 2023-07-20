import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroArea from "./../components/HeroArea";
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
const Homepage = () => {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);
    let user = async() => {
      try {

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
    
      if (!response.ok) {
        setLoading(false);
        throw new Error('Network response was not ok');
      }
      const body = await response.json();
      // console.log({body: res});
      if(!body.exist) navigate('/create-profile')
      setLoading(false);
      } catch(err) {
        console.log(err);
      }
      
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
        <div className="grid place-content-center h-screen w-screen">
          <div className="text-5xl"><LoadingPage /></div>
        </div>
      }
      </>
    );
};

export default Homepage;
