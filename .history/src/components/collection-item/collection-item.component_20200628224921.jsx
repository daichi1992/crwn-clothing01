import React from 'react'; 

import './collection-item.component.scss'; 

const collectionItem = () => (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
    </div>
); 