import { GoSearch } from "react-icons/go";

function SearchBar({searchQuery, handleSearchQuery}) {
    return (
        <div className="flex gap-4 w-screen text-slate-500 justify-center items-center">
            <div className="min-w-[1050px]">
                <div className="flex gap-4 relative right-8">
                    <div className="search-area relative flex justify-center items-center gap-2 ">
                        <GoSearch className="relative left-8" />
                        <input
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchQuery}
                            className="ps-8 h-10 w-[8rem] sm:w-auto text-sm rounded-md outline-transparent border-none focus:outline-myblue bg-blue-50 focus:outline-[1px]"
                        />
                    </div>
                    <button className="bg-myblue text-white px-4 py-2 rounded-md">Search</button>
                </div>
            </div>

        </div>
    );
}

export default SearchBar;
