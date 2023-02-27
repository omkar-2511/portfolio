import style from '../Style/about.scss'
const About = () => {

    const personalData = [
        { key: 'Name', value: 'Omkar Sawant' },
        { key: 'Email', value: 'omkar25@gmail.com', color: '#20c997' },
        { key: 'Age', value: '23' },
        { key: 'From', value: 'Mumbai, Maharashtra' },
    ]

    const buttonClick = () => {
        fetch('resume/OmkarResume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume Download.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <div className={`${style.mainBox}`}>
                <div id='about'>
                    <div className={style.mainHeading}>
                        ABOUT ME
                    </div>
                    <div className={style.subHeading}>
                        Know Me More
                    </div>

                    <div className={`${style.aboutBox} container`}>
                        <div className='row'>
                            <div className='col-sm-6 col-md-6 col-lg-6' >
                                <div className={style.aboutHeading}>
                                    <span>I'm</span> {''}
                                    <span className={style.sub_text}>Omkar Sawant,</span> {''}
                                    <span>a Front-end Developer</span>
                                </div>
                                <div className={style.paragraph}>
                                    I develop a mobile responsive UI structure. Continually work to ensure the user experience determines choices.<br /><br />
                                    After complete BSC-IT, I worked at newly startup company in the position of Front-end Developer. And side by side also i work on private web/app development project.
                                    When I'm not coding, you'll find me in the silent place on reading books.
                                </div>
                            </div>
                            <div className='col-sm-3 col-md-3 col-lg-3 ms-auto' style={{ marginRight: 40 }}>
                                {personalData.map((elem) => {
                                    return (
                                        <>
                                            <div>
                                                <span className={style.keyStyle}>{elem.key}: </span>
                                                <span className={style.valueStyle} style={{
                                                    color: elem.color
                                                }}>{elem.value}</span>
                                                <hr />
                                            </div>
                                        </>
                                    )
                                })}
                                <div>
                                    <button type="button" className={`btn ${style.download_btn}`} onClick={buttonClick}>Download CV</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About