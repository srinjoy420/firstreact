export const SearchFilter = ({ search, setSearch, filter, setFilter,setCountries,countries }) => {

    const handelInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)

    }
    const handleSelectChange=(event)=>{
        event.preventDefault();
        setFilter(event.target.value)


    }
    const sortCountries=(value)=>{
       const sortcountry=[...countries].sort((a,b)=>{
        return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);

       })
       setCountries(sortcountry)
    }
    return (
        <section className="section-searchFilter container">
            <input type="text" placeholder="search" value={search} onChange={handelInputChange} />
            <div>
                <button onClick={()=>sortCountries("asc")}>Asc</button>
            </div>
              <div>
                <button onClick={()=>sortCountries("des")}>Des</button>
            </div>
            <div>
                <select
                    className="select-section"
                    value={filter}
                    onChange={handleSelectChange}
                >
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}