import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserButton, useAuth } from '@clerk/clerk-react';

const Navbar = () => {
    const navigate = useNavigate();
    const { isSignedIn, isLoaded } = useAuth();
    console.log(isSignedIn);
    return (
        <nav className="flex w-screen px-4 py-4 shadow-sm justify-center items-center text-slate-500 ">
            <div className="flex justify-between max-w-[1050px] w-full cursor-pointer items-center">
                <figure>
                    <img src={logo} />
                </figure>
                <ul className="flex gap-4 items-center sm:gap-6">
                    <li className="border-b-2 border-transparent hover:border-myblue px-1 cursor-pointer">
                        Home
                    </li>
                    <li className="border-b-2 border-transparent hover:border-myblue px-1 cursor-pointer">
                        Medicines
                    </li>
                    {
                      !isSignedIn &&
                      <Link to='/sign-in/*'>
                    <li className="bg-myblue text-white py-1 px-3 rounded-md hover:opacity-70 cursor-pointer">
                        Sign In
                    </li>
                    </Link>
                    }
                    {
                      isSignedIn &&
                    <UserButton/>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
