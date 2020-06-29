import React from 'react'; 

import './fom-input.styles.scss'; 

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ? (
            <label
                className={
                    `${otherProps.value.length}` ? 'shrink' : ''
                }
        )}
    </div>
)