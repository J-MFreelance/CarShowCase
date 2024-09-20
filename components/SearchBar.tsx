'use client'

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {

    const [manufacturers, setManufacturers] = useState('')

    const handleSearch = () => {
        
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturers} setManufacturer={setManufacturers} />
            </div>
        </form>
    )
}

export default SearchBar