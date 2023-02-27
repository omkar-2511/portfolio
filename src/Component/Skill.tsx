import globalStyle from '../Style/about.scss'
import style from '../Style/skill.scss'

const Skill = () => {
    const data = [
        { imgPath: 'images/HTML.png', span: 'HTML' },
        { imgPath: 'images/css.png', span: 'CSS' },
        { imgPath: 'images/reactJs.png', span: 'React.Js' },
        { imgPath: 'images/reactNative.png', span: 'React Native' },
        { imgPath: 'images/javaScript.png', span: 'JavaScript' },
        { imgPath: 'images/typeScript.png', span: 'Typescript' },
        { imgPath: 'images/sass.png', span: 'Sass' },
    ]

    return (
        <>
            <div id='skill' className={`${style.mainBox}` }>
                <div>
                    <div className={globalStyle.mainHeading}>
                        SKILS
                    </div>
                    <div className={globalStyle.subHeading}>
                        Technical Skils
                    </div>

                    <div className={`row ${style.viewBox}`}>
                        {data.map((elem) => {
                            return (
                                <div className={`col-sm-3 col-md-3 col-lg-3 ${style.box_text_view}`}>
                                    <div id={style.cards_landscape_wrap}>
                                        <div className={style.cardFlyer}>
                                            <div className={`${style.animated} ${style.fadeIn}`}>
                                                <div className={`${style.newBox} rounded`}>
                                                    <div className={style.imagebox}>
                                                        <div className={style.img_view}>
                                                            <img
                                                                src={elem.imgPath}
                                                                alt='??'
                                                                height={80}
                                                                width={80}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${style.animatedText} ${style.lightSpeedIn}`}>
                                        <div className={style.heading}>
                                            {elem.span}
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
export default Skill