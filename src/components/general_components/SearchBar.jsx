import React, { memo } from 'react'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search" />
        </div>
    )
}

export default memo(SearchBar)