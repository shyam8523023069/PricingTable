import { render } from '@testing-library/react';
import React from 'react';
import './Table.css'

const PriceingTable = () => {
    return (
        <div className="headerPrice row">
            <div className="headDiv column1  col-lg-4" >
                <h2>Features</h2>
            </div>


            <div className="headDiv column1 col-lg-4" >
                <h3>Starter</h3>
                <p className="price">
                    <span className="dollar">&#36;</span>0</p>
                <p className="offer">Per user, per month</p>
                <div className="positionBox">
                    <span>Go Starter</span>
                </div>
            </div>

            <div className="headDiv column1 col-lg-4" >
                <h3>Professional</h3>
                <p className="price">
                    <span className="dollar">&#36;</span>25</p>
                <p className="offer">Per user, per month</p>
                <div className="positionBox">
                    <span>Go Professional</span>
                </div>
            </div>

            <div className="headDiv column1 col-lg-4" >
                <h3 >Organization</h3>
                <p className="price">
                    <span className="dollar">&#36;</span>50</p>
                <p className="offer">Per user, per month</p>
                <div className="positionBox">
                    <span>Go Organization</span>
                </div>
            </div>
        </div>
    )
}

export default PriceingTable;
