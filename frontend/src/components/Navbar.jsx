import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex w-screen px-4 py-4 shadow-sm justify-center text-slate-500 ">
            <div className="flex justify-between max-w-[1050px] w-full">
                <figure>
                    <img src={logo} />
                </figure>
                <ul className="flex gap-4 sm:gap-6">
                    <li className="border-b-2 border-transparent hover:border-myblue px-1 cursor-pointer">
                        Home
                    </li>
                    <li className="border-b-2 border-transparent hover:border-myblue px-1 cursor-pointer">
                        Medicines
                    </li>
                    <li className="bg-myblue text-white py-1 px-3 rounded-md hover:opacity-70 cursor-pointer">
                    Sign In
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
