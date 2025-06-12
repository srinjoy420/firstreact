import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components/Ui/Loader"
import { CountryCard } from "../components/layout/CountryCard"
import { SearchFilter } from "../components/Ui/SearchFilter"

export const Country=()=>{
    const[ispending,startTransition]=useTransition()
    const[countries,setCountries]=useState([])
    const [search,setSearch]=useState()
    const[filter,setFilter]=useState("all")
    useEffect(()=>{
       startTransition(async()=>{
        const res=await getCountryData()
        // console.log(res);
        setCountries(res.data)
        
       })


    },[])
    if(ispending) return <Loader/>
    console.log(search,filter);
    const searchCountry=(country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country
    }
    const filterRegion=(country)=>{
        if(filter==="all") return country
        return country.region===filter;
         
    }
    // main logic
    const filtercountries=countries.filter((country)=>searchCountry(country) && filterRegion(country))
    
    return(
        <section className="country-section">
         <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}countries={countries}setCountries={setCountries}/>


            <ul className="grid grid-four-cols">
                {
                    filtercountries.map((countrry,index)=>{
                        return <CountryCard country={countrry} key={index}/>
                    })
                }
            </ul>
        </section>
    )

    return (<h1>Country page</h1>)
}