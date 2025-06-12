export const Contact = () => {
    const handelFromSubmit=(formdata)=>{
        // console.log(formdata.entries());
        const formInputData=Object.fromEntries(formdata.entries())
        console.log(formInputData);
        
        
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                <form action={handelFromSubmit}>
                    <input type="text" className="form-control" required autoComplete="false" placeholder="Entwr your name" name="username" />
                    <input type="text" className="form-control" required autoComplete="false" placeholder="Entwr your email" name="email" />
                    <textarea className="form-control" rows={"10"} required autoComplete="false" placeholder="Entwr your message" />
                    <button type="submit">Send</button>


                </form>
            </div>

        </section>
    )
}