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
                    imageUrl: 'https://i.ibb.co/cvpntL1'
                }
            ]
        }
    }
}