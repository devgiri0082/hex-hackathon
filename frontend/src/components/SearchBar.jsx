import  { useState } from "react";
import { GoSearch } from "react-icons/go";

function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };
    return (
        <div className="flex gap-4">
            <div className="relative flex items-center justify-center gap-2 search-area ">
                <GoSearch className="relative left-8" />
                <input
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearch}
                    className="ps-8 h-10 w-[8rem] sm:w-auto text-sm rounded-md outline-transparent border-none focus:outline-myblue focus:outline-[1px]"
                />
            </div>
            {/* <div className="flex items-center gap-2 rounded-sm bg-slate-400">
                <GoSearch className="text-white"/>
                <input className="" placeholder="Search here..." />
            </div> */}
            <button className="px-4 py-2 text-white rounded-md bg-myblue">Search</button>
        </div>
    );
}

export default SearchBar;
