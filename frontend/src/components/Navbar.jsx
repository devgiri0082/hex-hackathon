import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserButton, useAuth } from '@clerk/clerk-react';

const Navbar = () => {
    const navigate = useNavigate();
    const { isSignedIn, isLoaded } = useAuth();
    console.log(isSignedIn);
    return (
        <nav className="flex items-center justify-center w-screen px-4 py-4 shadow-sm text-slate-500 ">
            <div className="flex justify-between max-w-[1050px] w-full cursor-pointer items-center">
                <figure>
                    <img src={logo} />
                </figure>
                <ul className="flex items-center gap-4 sm:gap-6">
                    <li className="px-1 border-b-2 border-transparent cursor-pointer hover:border-myblue">
                        Home
                    </li>
                    <li className="px-1 border-b-2 border-transparent cursor-pointer hover:border-myblue">
                        Medicines
                    </li>
                    {
                      !isSignedIn &&
                      <Link to='/sign-in/*'>
                    <li className="px-3 py-1 text-white rounded-md cursor-pointer bg-myblue hover:opacity-70">
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
