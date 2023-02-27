import React from 'react'
import style from '../Style/about.scss'

const Contact = () => {

    const personalData = [
        { key: 'Name', value: 'Omkar Sawant' },
        { key: 'Email', value: 'omkar25@gmail.com', color: '#20c997' },
        { key: 'Age', value: '23' },
        { key: 'From', value: 'Mumbai, Maharashtra' },
    ]

    const buttonClick = () => {
        fetch('images/profile.jpeg').then(response => {
            console.log('...... enter ......')
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume Download.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <div className={`container ${style.mainBox}`}>
                <div>
                    <div className={style.mainHeading}>
                        CONTACT
                    </div>
                    <div className={style.subHeading}>
                        Get in touch
                    </div>

                    <div>
                        <div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact