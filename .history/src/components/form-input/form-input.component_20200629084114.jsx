import React from 'react'; 

import './fom-input.styles.scss'; 

// const FormInput = ({handleChange, label, ...otherProps}) => (
//     <div className='group'>
//         <input className='form-input' onChange={handleChange} {...otherProps} />
//         {label ? (
//             <label
//                 className={
//                     `${otherProps.value.length ? 'shrink' : ''} form-input-label`
//                 }
//             >
//                 {label}
//             </label>
//         ) : null}
//     </div>
// )

const FormInput = ({handleChange, label, ...otherProps}) => {
    console.log('handlechange: '+handleChange, 'label: '+label, ''otherProps); 
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {label ? (
                <label
                    className={
                        `${otherProps.value.length ? 'shrink' : ''} form-input-label`
                    }
                >
                    {label}
                </label>
            ) : null}
        </div>
    )
}




export default FormInput; 