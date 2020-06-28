import React from 'react'; 

import './collection-preview.styles.scss'; 

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpper}</h1>
        <div className='preview'>
        
        </div>
    </div>
)
