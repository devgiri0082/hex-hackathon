import React from "react";
import heroImg from "../assets/heroimg.svg";

function HeroArea() {
    return (
        <main className="bg-primary-gradient bg-no-repeat bg-cover flex justify-center items-center min-h-[688px] w-full">
            <div className="flex max-w-[1050px] justify-center items-center px-4 sm:px-0 gap-8">
                <section className="flex flex-col gap-4 items-start">
                    <article className="text-slate-600 text-5xl max-w-[350px] font-medium">Your Medicine On The Go!</article>
                    <article className="text-slate-500 max-w-[400px]">
                        Experience the convenience of modern medicine delivery with MediFast. Join
                        us today and witness the difference that fast, reliable, and easy-to-use
                        service can make in your healthcare journey. Whether you're tech-savvy or
                        not, you'll find navigating our platform a breeze.
                    </article>
                    <button className="text-lg bg-myblue text-white px-4 py-2 rounded-md">Get Started</button>
                </section>
                <section>
                    <figure className="">
                        <img src={heroImg} className="sm:min-w-[400px]"/>
                    </figure>
                </section>
            </div>
        </main>
    );
}

export default HeroArea;