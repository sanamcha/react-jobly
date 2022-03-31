
import React, { useState} from "react";


// { CompanyList, Joblist } -> SearchForm
function SearchForm({ toSearch }) {
    const [search, setSearch ] = useState("");

    //to filter -> use trim()
function handleSubmit(e) {
    e.preventDefault();
    toSearch(search.trim)
    setSearch(search.trim());
}

//update form
function handleChange(e){
    setSearch(e.target.value);
}

return (
    <div className="SearchForm">
        <form 
        className="form-inline"
        onSubmit ={handleSubmit} >
        <input 
        className="form-control"
        name="search"
        placeholder="search....."
        value={search}
        onChange={handleChange}
         />

        <button type="submit"
        className="btn btn-primary">
            Submit</button> 
        </form>
    </div>
);

}

export default SearchForm;


