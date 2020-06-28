import React from 'react'; 
import SHOP_DATA from '../../pages/shop/shop.data'; 
import './collection-preview.styles.scss'; 

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}; 

// const CollectionPreview = ({title, items}) => (
//     <div className='collection-preview'>
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <div className='preview'>
//             {items.map(item => (
//                 <div key={item.id}>{item.name}</div>
//             ))}
//         </div>
//     </div>
// )

export default CollectionPreview; 
