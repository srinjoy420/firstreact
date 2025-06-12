import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components/Ui/Loader"
import { CountryCard } from "../components/layout/CountryCard"

export const Country=()=>{
    const[ispending,startTransition]=useTransition()
    const[countries,setCountries]=useState([])
    useEffect(()=>{
       startTransition(async()=>{
        const res=await getCountryData()
        // console.log(res);
        setCountries(res.data)
        
       })


    },[])
    if(ispending) return <Loader/>
    return(
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((countrry,index)=>{
                        return <CountryCard country={countrry} key={index}/>
                    })
                }
            </ul>
        </section>
    )

    return <h1>Country page</h1>
}