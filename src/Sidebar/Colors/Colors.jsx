import React from 'react';

const Colors = ({ handleChange }) => {
    return (
        <div>
            <h2 className='sidebar-title color-title'>Colors</h2>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="test1" />
                <span className="checkMark all"></span>All
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="black" name="test1" />
                <span className="checkMark" style={{ backgroundColor: 'black' }}></span>Black
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="blue" name="test1" />
                <span className="checkMark" style={{ backgroundColor: 'blue' }}></span>Blue
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="red" name="test1" />
                <span className="checkMark" style={{ backgroundColor: 'red' }}></span>Red
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="green" name="test1" />
                <span className="checkMark" style={{ backgroundColor: 'green' }}></span>Green
            </label>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="white" name="test1" />
                <span className="checkMark" style={{ border: "2px solid black", backgroundColor: "white" }}></span>White
            </label>
        </div>
    );
};

export default Colors;
