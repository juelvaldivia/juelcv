import React from 'react';

const Certificates = props => (
    <div className='Certificates'>
        <div className='Certificates-container'>

        {
                props.data.map((item, index) => (

                    <div className='Certificates-item' key={`Certificate-${index}`}>
                        <h3>{item.name} @ {item.institution}
                            <span>{item.date}</span>
                        </h3>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Certificates;