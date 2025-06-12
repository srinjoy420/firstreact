import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom"
import { Loader } from "../Ui/Loader";
import { getCountryIndData } from "../../api/postApi";


export const CountryDetails = () => {
    const params = useParams();

    const [ispending, startTransition] = useTransition()
    const [country, setCountry] = useState([])
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id)
            // console.log(res);
            console.log(res);
            if (res.status === 200) {
                setCountry(res.data[0])
            }



        })


    }, [])
    if (ispending) return <Loader />
    console.log(params);
    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box">
                {country.name?.official && (
                    <h1>{country.name.official}</h1>
                )}
            </div>

        </section>
    )

}