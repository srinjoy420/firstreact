import { FaLongArrowAltRight } from "react-icons/fa";
export const Herosection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the world, One country at a time
                    </h1>
                    <p className="paragraph">
                        Discover history djsbfdjskbfc zx,mcadkjkjdfnadkjfnadkjf
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start exploring <FaLongArrowAltRight />
                    </button>

                </div>
                <div className="hero-image">
                    <img src="/images/images.jpg" alt="world beauty" className="bannerimage" />
                </div>


            </div>
        </main>
    )
}