
const Footer = () => {
    return (
        <>
            <div>
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: '#262626' }}
                >
                    <div className="p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold" style={{
                                        paddingTop: 50,
                                        fontSize: 30
                                    }}>
                                        Portfolio
                                    </h6>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>

                                    <p><i className="fas fa-envelope mr-3"></i> sawantomkar2511@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> +91 93240 16308</p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                                    <a
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#0082ca' }}
                                        href="https://www.linkedin.com/in/omkar-sawant-7b71a7266/"
                                        role="button"
                                    ><i className="fab fa-linkedin-in"></i
                                    ></a>

                                </div>
                            </div>
                        </section>
                    </div>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: '#000' }}
                    >

                        <a className="text-white" href="https://mdbootstrap.com/" style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                        >Portfolio - Omkar Sawant</a
                        >
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer