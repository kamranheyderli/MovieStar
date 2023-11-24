import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ setQuerry }) => {

    const handleSearch = (e) => {
        setQuerry(e.target.value)
    }
    return (
        <div className='input'>
            <input type="text" onChange={handleSearch} placeholder='Search Films..' />
            <FaSearch className='search_icons' />
        </div>
    )
}

export default SearchInput