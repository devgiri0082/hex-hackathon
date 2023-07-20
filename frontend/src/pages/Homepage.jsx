import Navbar from "../components/Navbar";
import HeroArea from "./../components/HeroArea";

const Homepage = () => {
    return (
        <main className="flex flex-col items-center justify-center">
            <Navbar />
            <HeroArea />
        </main>
    );
};

export default Homepage;
