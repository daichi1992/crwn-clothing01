import React from 'react'; 

import './collection-preview.styles.scss'; 

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.map(item => (
                <div key={}
            ))}
        </div>
    </div>
)
