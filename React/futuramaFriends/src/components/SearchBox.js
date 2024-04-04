const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='inputbox-container'>
            <input 
                type='search' 
                placeholder='Search Directory' 
                onChange={searchChange} 
                className='inputbox inputbox-text'
                />
        </div>
    );
}

export default SearchBox;