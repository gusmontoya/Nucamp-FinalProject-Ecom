import React from 'react';
import '../App.css';
import {Button} from './Button';
import './NewCollection.css';

function NewCollection() {
    return (
        <div className='NewCollection-container'>
            <image src="/public/images/collection.jpg" href="/" />
            <h2>The poetry of light</h2>
            <p>New collection 2021</p>
            <div className="NewCollection-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Discover more
                </Button>
            </div>
        </div>
    )
}

export default NewCollection;