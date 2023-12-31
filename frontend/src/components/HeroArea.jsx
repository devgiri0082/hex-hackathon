/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import heroImg from "../assets/heroimg.svg";
import { useAuth } from "@clerk/clerk-react";
function HeroArea() {
  const {isSignedIn} = useAuth();
    return (
        <main className="bg-primary-gradient bg-no-repeat bg-cover flex justify-center items-center min-h-[680px] w-full px-4 sm:px-8 lg:px-0">
            <div className="flex max-w-[1050px] justify-center items-center px-4 sm:px-0 gap-8">
                <section className="flex flex-col gap-4 items-start">
                    <article className="text-slate-600 text-5xl max-w-[350px] font-medium leading-normal">
                        Your Medicine On The Go!
                    </article>
                    <article className="text-slate-500 max-w-[400px]">
                        Experience the convenience of modern medicine delivery with MediFast. Join
                        us today and witness the difference that fast, reliable, and easy-to-use
                        service can make in your healthcare journey. Whether you're tech-savvy or
                        not, you'll find navigating our platform a breeze.
                    </article>
                    <Link to={isSignedIn ? '/medicines':'/sign-in/*'}>
                    <button className="px-4 py-2 text-lg text-white rounded-md bg-myblue">Get Started</button>
                    </Link>
                </section>
                <section>
                    <figure className="">
                        <img src={heroImg} className="sm:min-w-[400px]" />
                    </figure>
                </section>
            </div>
        </main>
    );
}

export default HeroArea;
