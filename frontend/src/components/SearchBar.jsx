import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };
    return (
        <div className="flex gap-4">
            <div className="search-area relative flex justify-center items-center gap-2 ">
                <GoSearch className="relative left-8" />
                <input
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearch}
                    className="ps-8 h-10 w-[8rem] sm:w-auto text-sm rounded-md outline-transparent border-none focus:outline-myblue focus:outline-[1px]"
                />
            </div>
            {/* <div className="flex gap-2 items-center bg-slate-400 rounded-sm">
                <GoSearch className="text-white"/>
                <input className="" placeholder="Search here..." />
            </div> */}
            <button className="bg-myblue text-white px-4 py-2 rounded-md">Search</button>
        </div>
    );
}

export default SearchBar;
