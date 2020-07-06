import React from 'react'; 
import { Route } from 'react-router-dom'; 
import { connect } from 'react-redux'; 

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'; 

import { updateCollections } from '../../redux/shop/shop.actions'; 

import WithSpinner from '../../components/with-spinner/with-spinner.component'; 

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); 
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component{
    state = {
        loating: true
    }; 

    unsbscribeFromSnapshot = null; 

    componentDidMount(){
        const { updateCollections } = this.props; 
        const collectionRef = firestore.collection('collections'); 

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot); 
            updateCollections(collectionsMap); 
            this.setState({loading: false}); 
        }); 
    }
    
    render(){
    const {match} = this.props; 
    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
        )
    }; 
}; 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
        dispatch(updateCollections(collectionsMap)) 
}); 

export default connect(null, mapDispatchToProps)(ShopPage); 