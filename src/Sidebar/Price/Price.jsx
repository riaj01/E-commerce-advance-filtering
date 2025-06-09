import React from 'react';
import './Price.css';

const Price = ({ handleChange }) => {
    return (
        <div className='ml'>
            <h2 className="sidebar-title price-title">Price</h2>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="test2" />
                <span className="checkMark"></span>All
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value={50} name="test2" />
                <span className="checkMark"></span>$0 - $50
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value={100} name="test2" />
                <span className="checkMark"></span>$50 - $100
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value={150} name="test2" />
                <span className="checkMark"></span>$100 - $150
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value={200} name="test2" />
                <span className="checkMark"></span>Over $200
            </label>
        </div>
    );
};

export default Price;
