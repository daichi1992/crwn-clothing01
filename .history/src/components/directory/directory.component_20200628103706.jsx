import React from 'react'; 
import MenuItem from '../menu-item/menu-item.component'; 
import './directory.styles.scss'; 

class Directory extends React.Component{
    constructor(){
        super(); 

        this.state = {
            sections: [
                {
                    title: 'hats', 
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', 
                    id: 1
                }, 
                {
                    title: 'jackets', 
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.ng', 
                    id: 2
                }, 
                {
                    title: 'sneakers', 
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png', 
                    id: 3
                }, 
                {
                    title: 'womens', 
                    imageUrl: 'https://i.ibb.co/GCCdy8t', 
                    id: 1
                }, 
                {
                    title: 'hats', 
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', 
                    id: 1
                }, 
            ]
        }
    }
}