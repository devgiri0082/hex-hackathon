import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex w-screen px-4 py-4 shadow-sm justify-center ">
            <div className="flex justify-between max-w-[1050px] w-full">
                <figure>
                    <img src={logo} />
                </figure>
                <ul className="flex gap-4 sm:gap-6">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About Us</li>
                    <li onClick={()=>{
                        console.log("first")
                        navigate('/medicines')
                    }}>Medicines</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
