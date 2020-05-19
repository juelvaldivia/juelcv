import React from 'react';

const Education = props => (
    <div className='Education'>
        <div className='Education-container'>
            {
                props.data.map((item, index) => (

                    <div className='Education-item' key={`Edu-${index}`}>
                        <h3>{item.degree} {item.institution}
                            <span>{item.startDate} - {item.endDate}</span>
                        </h3>
                        <p>{item.description}</p>
                    </div>
                ))
            }

        </div>
    </div>
);

export default Education;