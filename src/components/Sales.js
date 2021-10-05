import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Sale.css';

function Sales() {
    return (
        <div className='Sales-container'>
            <image src="/Sale/" href="/" />
            <p>Discount 25% on the spring collection of ceramic vases</p>
            <div className="Sales-btns">
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

export default Sales;