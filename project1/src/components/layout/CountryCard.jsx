import { NavLink } from "react-router-dom"

export const CountryCard = ({ country }) => {
    const { name, population, flags, region, capital } = country
    return (
        <li className="country-card card">
            <div className="container-card bg-white">
                <img src={flags.svg} alt={flags.alt} />
                <div className="countryInfo">
                    <p className="card-title">
                        {name.common.length > 10
                            ? name.common.slice(0, 10) + "..."
                            : name.common}
                    </p>
                    <p>
                        <span className="card-description">Population:</span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="card-description">Region:</span> {region}
                    </p>
                    <p>
                        <span className="card-description">Capital:</span>
                        {capital[0]}
                    </p>
                    {/* button */}
                   <NavLink to={`/country/${name.common}`}>
                     <button>Read more</button>
                   </NavLink>
                </div>

            </div>
        </li>
    )

}