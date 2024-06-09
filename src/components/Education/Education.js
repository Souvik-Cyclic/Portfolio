import React from 'react';
import './Education.css';
import bits from '../../assets/bits.jpeg';
import sst from '../../assets/sst.jpg';

function Education() {
    const EducationData = [
        {
          college: 'Scaler School Of Technology',
          time: '2023 - 2027',
          image: sst
        },
        {
          college: 'BSc Computer Science - BITS Pilani',
          time: '2023 - 2026',
          image: bits
        },
    ];
    return (
        <div className='education-div'>
            <br></br>
            <h1>Education</h1>
            <br/>
            <div className='education-data'>
                {EducationData.map((Education, index) => (
                    <div key={index} className="education-item">
                    <h2>{Education.college}</h2>
                    <p className="education-time">{Education.time}</p>
                    <img src={Education.image} alt="college" />
                    <br/>
                    </div>
                ))}
            </div>
            <p>
            </p>
        </div>
    )
}

export default Education;
