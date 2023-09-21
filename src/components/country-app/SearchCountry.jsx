import 'react-toastify/dist/ReactToastify.css';
import { FaSearchengin } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const SearchCountry = (props) => {
    const [searchText, setSearchText] = useState('')
    const searchHandle = (e)=>{
        setSearchText(e.target.value)
    }

    useEffect(()=>{
        props.onSearchValue(searchText);
    },[searchText])

    return (
        <>
            <div className="row justify-content-center mb-3">
                <div className="col-md-5">
                    <form className="d-flex bg-light px-4 py-3 shadow-lg rounded-pill border border-5 border-white" role="search">
                        <input onChange={searchHandle} value={searchText} className="form-control me-2 border-0 shadow" type="search" placeholder="Search country.." />
                        <button className="btn btn-primary" type="submit"><FaSearchengin /></button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SearchCountry;