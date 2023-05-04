"use client";
import { useCallback, useState } from "react";
import { useRouter } from 'next/navigation'; 


const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); 

  const onSearch = useCallback((event: React.FormEvent) => {
    event.preventDefault(); 

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`) 

    


  }, [searchQuery, router]); 

  return (
    <form className='flex justify-center w-2/3' onSubmit={onSearch}>

    <input
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
      placeholder="What are you looking for? "
      />
      </form>
  );
};

export default SearchInput;
