import React from 'react'
import { Container } from '../../utils/Utils'

const Experince = () => {
    const education = [
        {
            company: 'Weather',
            position: 'Frontend & Design',
            duration: '04/2024 - 04/2024',
            description: 'In this project I perfected my knowledge of HTML, CSS, JavaScript',
            link: 'https://reactobhavoo.netlify.app',

        },
        {
            company: 'HairCut Web Site',
            position: 'Frontend',
            duration: '11/2024 - 12/2024',
            description: 'While learning react js I built this project and additionally learned Readux and i18next',
            link: 'https://haircutuz.netlify.app',
        },
         {
            company: 'Osiyo Academy',
            position: 'SMM Manager',
            duration: '01/05/2025 - Present',
            description: 'I am currently working as an SMM manager at Men Osiyo Academy, an educational center. At the moment, I am focusing heavily on targeting and increasing the audience on social media platforms.',
            link: 'https://t.me/osiy0_academy',

        }
    ];
    return (
        <>
            <Container>
                {/* <h2 class="title">Education<span class="animate" style="--i:1;"></span></h2> */}
                <div className="timeline__box">
                    {education.map((edu, index) => (
                        <div key={index} className="timeline__content">
                            <div className="timeline__item">
                                <a href={edu.link} target='_blank' rel="noreferrer" className='timeline__item-title'>{edu.company}</a>
                                <h3 className='timeline__item-subtitle'>{edu.position}</h3>
                                <p className='timeline__item-year'>{edu.duration}</p>
                                <p className='timeline__item-desc'>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Experince