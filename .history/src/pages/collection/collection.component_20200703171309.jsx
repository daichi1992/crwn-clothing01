import React from 'react'; 
import { connect } from 'react-redux'; 

import CollectionItem from '../../components/collection-item/collection-item.component'; 

import { selectCollection } from '../../redux/shop/shop.selector'; 

import './collection.styles.scss'; 

const CollectionPage = (a) => {
    console.log(a); 
    return(
        <div className='collection'>
        <h2>COLLECTION PAGE</h2>
        </div>
        )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)()
})

export default CollectionPage; 