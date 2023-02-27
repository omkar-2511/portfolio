import globalStyle from '../Style/about.scss'
import style from '../Style/skill.scss'
import Styles from '../Style/experience.scss'

const Experience = () => {

    const experienceInfo = [
        { date: 'March 2022 Present-', companyName: 'AM Daily Services', description: 'Actively participated in the whole development process of Software Application, Website & ERP (Enterprise Resource Planning)' },
    ]

    return (
        <>
            <div id='experience' className={`${Styles.mainBox}`}>
                <div>
                    <div className={globalStyle.mainHeading}>
                        EXPERIENCE
                    </div>
                    <div className={globalStyle.subHeading}>
                        Work Experience
                    </div>

                    <div className={Styles.timelineView}>
                        <div className={Styles.timeline}>
                            <div className={Styles.boxContainer}>
                                <div className={`${Styles.container} ${Styles.right}`}>
                                    {experienceInfo.map((elem) => {
                                        return (
                                            <div className={Styles.content}>
                                                <div className={`${Styles.surroundedBox} rounded`}>
                                                    <p className={Styles.p_text_style}>{elem.date}</p>
                                                </div>
                                                <h4 className={Styles.inner_box_text}>{elem.companyName}</h4>
                                                <p className={Styles.inner_box_subText}>
                                                    &#8226; {elem.description}
                                                </p>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Experience