
import React, { useState} from "react";


// { CompanyList, Joblist } -> SearchForm
function SearchForm({ toSearch }) {

    console.debug("SearchForm", "toSearch=", typeof toSearch);
    const [search, setSearch ] = useState("");

    //to filter -> use trim()
function handleSubmit(e) {
    e.preventDefault();
    toSearch(search.trim());
    setSearch(search.trim());
}

//update form
function handleChange(e){
    setSearch(e.target.value);
}

return (
    <div>
        <form 
        className="form-inline form-control"
        onSubmit ={handleSubmit} >
        <input 
        className="form-control offset-md-4" 
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


