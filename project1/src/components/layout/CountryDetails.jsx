import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Loader } from "../Ui/Loader";
import { getCountryIndData } from "../../api/postApi";

export const CountryDetails = () => {
    const params = useParams();
    const [ispending, startTransition] = useTransition();
    const [country, setCountry] = useState({});

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);
            console.log(res);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        });
    }, [params.id]);

    if (ispending) return <Loader />;

    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box">
                {country?.name?.official && (
                    <div className="country-image grid grid-two-cols">
                        {country?.name?.common && (
                            <img
                                src={`https://countryflagsapi.com/svg/${country.name.common}`}
                                alt={`Flag of ${country.name.common}`}
                                className="flag"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        )}

                        <div className="country-content">
                            <p className="card-title">{country.name.official}</p>
                            <div className="infoContainer">
                                <p>
                                    <span className="card-description">Native Names:</span>{" "}
                                    {country?.name?.nativeName &&
                                        Object.keys(country.name.nativeName)
                                            .map((key) => country.name.nativeName[key].common)
                                            .join(", ")}
                                </p>
                                <p><span className="card-description">Population:</span> {country.population?.toLocaleString()}</p>
                                <p><span className="card-description">Region:</span> {country.region}</p>
                                <p><span className="card-description">Sub Region:</span> {country.subregion}</p>
                                <p><span className="card-description">Capital:</span> {country.capital?.join(", ")}</p>
                                <p><span className="card-description">Top Level Domain:</span> {country.tld?.[0]}</p>
                                <p>
                                    <span className="card-description">Currencies:</span>{" "}
                                    {country?.currencies &&
                                        Object.keys(country.currencies)
                                            .map((cur) => country.currencies[cur].name)
                                            .join(", ")}
                                </p>
                                <p>
                                    <span className="card-description">Languages:</span>{" "}
                                    {country?.languages &&
                                        Object.values(country.languages).join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="country-card-backBtn">
                    <NavLink to="/country" className="backBtn">
                        <button>Go Back</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};
