import React from "react";
import Navbar from "../components/Navbar";
import HeroArea from "./../components/HeroArea";

const Homepage = () => {
    return (
        <main className="flex flex-col justify-center items-center">
            <Navbar />
            <HeroArea />
        </main>
    );
};

export default Homepage;
