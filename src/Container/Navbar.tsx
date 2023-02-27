import { useState } from "react";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Education from "../Component/Education";
import Experience from "../Component/Experience";
import Footer from "../Component/Footer";
import Home from "../Component/Home";
import Skill from "../Component/Skill";
import style from '../Style/navbar.scss'

const Navbar = () => {

    const [indexKey, setIndexKey] = useState('home')
    const [toggleMenu, setToggleMenu] = useState(false)

    const buttonText = [
        { key: 'home', value: 'Home', className: 'Active' },
        { key: 'about', value: 'About' },
        { key: 'skill', value: 'Skills' },
        { key: 'education', value: 'Education' },
        { key: 'experience', value: 'Experience' },
    ]

    const press = (clickItem: any) => {
        console.log('press', clickItem)
        setIndexKey(clickItem)
    }

    return (
        <>

            <div>
                <div>
                    <div >
                        <nav className="primary-menu navbar navbar-expand-lg border-bottom-0" style={{
                            backgroundColor: '#000000'
                        }}>
                            <div className="container-fluid">
                                <div className={style.imageBorder}>
                                    <img
                                        className={`img-fluid rounded-pill d-block ${style.img_view}`}
                                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&usqp=CAU'}
                                        alt="profile"
                                    />
                                </div>
                                <div >
                                    <div>
                                        <text className={`text-center d-lg-block ${style.first_heading}`}>
                                            Omkar Sawant
                                        </text>
                                    </div>
                                    <div>
                                        <text className={`text-center d-lg-block ${style.second_subHeading}`} >
                                            Front-end Developer
                                        </text>
                                    </div>
                                </div>
                                <br />
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarRightAlignExample"
                                    aria-controls="navbarRightAlignExample"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={() => {
                                        setToggleMenu((_a) => !_a)
                                    }}
                                    style={{ color: '#FFFFFF' }}
                                >
                                    <span className="navbar-toggler-icon fas fa-bars"></span>
                                </button>
                                <div className={"collapse navbar-collapse " + (toggleMenu ? 'show' : "")} id="navbarRightAlignExample">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        {buttonText.map((elem: any, i: any) => {
                                            return (
                                                <>
                                                    <li className={`disable ${style.btnText} nav-item`}>
                                                        <span className="nav-link" onClick={() => press(elem.key)} style={{
                                                            color: '#FFFFFF'
                                                        }} >{elem.value} </span>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {indexKey === 'home' && (
                <Home />
            )}
            {indexKey === 'about' && (
                <About />
            )}
            {indexKey === 'skill' && (
                <Skill />
            )}
            {indexKey === 'education' && (
                <Education />
            )}
            {indexKey === 'experience' && (
                <Experience />
            )}
            <Footer />
            {/* <div className={`${style.main_navbar} side-header`}>
                <div className={`row`}>
                    <header id="header" className={`col-md-12 col-sm-12 col-lg-3 sticky-top`}>
                        <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
                            <div className={style.btnView}>
                                <button className="navbar-toggler" id="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#header-nav"
                                    aria-controls="header-nav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={() => {
                                        setToggleMenu((_a) => !_a)
                                    }}
                                >
                                    <span className="navbar-toggler-icon fas fa-bars"></span>
                                </button>
                            </div>

                            <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
                                <a className="mb-lg-auto mt-lg-4" >
                                    <img
                                        className={`img-fluid rounded-pill d-block ${style.img_view}`}
                                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&usqp=CAU'}
                                        alt="profile"
                                    />

                                    <text className={`text-center d-lg-block ${style.first_heading}`}>
                                        Omkar Sawant
                                    </text><br />
                                    <text className={`text-center d-lg-block ${style.second_subHeading}`} >
                                        Front-end Developer
                                    </text>
                                </a>

                                <hr className={style.line} />

                                <div id="header-nav" className={"collapse navbar-collapse " + (toggleMenu ? 'show' : "")}>
                                    <ul className="navbar-nav" style={{ flexDirection: 'column' }}>
                                        {buttonText.map((elem: any) => {
                                            return (
                                                <>
                                                    <li className={`${style.btnText} nav-item`}>
                                                        <span className="nav-link" onClick={() => press(elem.key)} >{elem.value} </span>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className="col-md-12 col-lg-9" id="content" role="main">
                        {indexKey === 'home' && (
                            <Home />
                        )}
                        {indexKey === 'about' && (
                            <About />
                        )}
                        {indexKey === 'skill' && (
                            <Skill />
                        )}
                        {indexKey === 'education' && (
                            <Education />
                        )}
                        {indexKey === 'experience' && (
                            <Experience />
                        )}
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Navbar


