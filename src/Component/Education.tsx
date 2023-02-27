import style from '../Style/about.scss'
import Styles from '../Style/education.scss'

const Education = () => {

    const information = [
        { firstHeading: 'Bachelor of Science in Information - Technology', date: '2017 - 2020', university: 'Mumbai University' },
        { firstHeading: 'Higher Secondary Certificate', date: '2016 - 2017', university: 'Mumbai University' },
        { firstHeading: 'Secondary School Certificate', date: '2013 - 2014', university: 'Mumbai University' },
    ]

    return (
        <>
            <div id='education' className={`${style.mainBox}`}>
                <div>
                    <div className={style.mainHeading}>
                        SUMMARY
                    </div>
                    <div className={style.subHeading}>
                        Education
                    </div>
                </div>
                <div >
                    <h2 className={Styles.h2}>
                        Education:
                    </h2>
                    <div className={`row container ${Styles.boxView} `}>
                        {information.map((elem) => {
                            return (
                                <div className='col-sm-4 col-md-4 col-lg-4' style={{
                                    paddingBottom: 40
                                }}>
                                    <div className={`${Styles.flip_card} rounded`}>
                                        <div className={Styles.flip_card_inner}>
                                            <div className={Styles.flip_card_front}
                                            >
                                                <div className={Styles.front_box_text}>
                                                    <p>
                                                        {elem.firstHeading}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={Styles.flip_card_back}>
                                                <div className={Styles.date_box_view}>
                                                    <div className={`${Styles.box} rounded`}>
                                                        <p className={Styles.date_text}>
                                                            {elem.date}
                                                        </p>
                                                    </div>
                                                </div>
                                                <h3>{elem.university}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education