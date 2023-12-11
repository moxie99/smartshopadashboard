import React from 'react'

const Search = ({ setParPage, setSearchValue, searchValue }) => {
    return (
        <div className='flex justify-between items-center'>
            <select onChange={(e) => setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:primary outline-none bg-primary border border-secondary rounded-md text-white'>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="25">25</option>
            </select>
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className='px-4 py-2 focus:primary outline-none bg-primary border border-secondary rounded-md text-white' type="text" placeholder='search' />
        </div>
    )
}

export default Search