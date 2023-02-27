import style from '../Style/home.scss'

const Home = () => {

    return (
        <>
            <div id='home'>
                <div 
                className={`img-fluid`}
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1619972898592-5de4b1c68025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
                    backgroundSize: 'cover',
                    height: '100vh',
                }}>
                    <div className={`${style.textBox} container`}>
                        <div className={` ${style.subText}`}>Welcome</div>
                        <h1 className={` ${style.heading}`}>I'm Omkar Sawant</h1>
                        <div className={style.subText}>
                            based in Mumbai
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home