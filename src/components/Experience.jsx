import React from 'react';

const Experience = props => (
    <div className='Experience'>
        <div className='Experience-container'>

        {
                props.data.map((item, index) => (

                    <div className='Experience-item' key={`Exp-${index}`}>
                        <h3>{item.jobTitle} {item.company}
                            <span>{item.startDate} - {item.endDate}</span>
                        </h3>
                        <p>{item.jobDescription}</p>
                    </div>
                ))
            }

            <div className='Experience-item'>
                <h3>Name</h3>
                <p>aprendí muchas cosas</p>
            </div>
        </div>
    </div>
);

export default Experience;