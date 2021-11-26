import { SearchOutlined } from "@material-ui/icons";

function SearchBar(){
    return(
        <div className='searchBar_wrapper'>
            <div className="searchBar_container">
                <div className="_cancel_icon"></div>
                <div className="_input"></div>
                <div className="_search_icon">
                    <SearchOutlined sx={{ color: 'white' }}></SearchOutlined>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;