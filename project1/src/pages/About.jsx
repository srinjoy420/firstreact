import countryfacts from "../api/countryData.json"
export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                here are the intersenting facts
                <br />
                We are proude of
            </h2>
            <div className="gradient-cards">

                {
                    countryfacts.map((country) => {
                        const {id,countryName,capital,population,interestingFact} =country
                        return (
                            <div className="card" key={id}>
                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{countryName}</p>
                                    <p >
                                        <span className="card-description">{capital}:</span>
                                        Delhi
                                    </p>
                                    <p >
                                        <span className="card-description">{population}:</span>
                                        145222225551
                                    </p>
                                    <p >
                                        <span className="card-description">{interestingFact}:</span>
                                        we love india
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        </section>
    )
}