import React from 'react';
import './Category.css';

const Category = ({ handleChange }) => {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkMark"></span>All
                </label>

                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="sneakers"
                        name="test"
                    />
                    <span className="checkMark"></span>Sneakers
                </label>

                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="flats"
                        name="test"
                    />
                    <span className="checkMark"></span>Flats
                </label>

                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="sandals"
                        name="test"
                    />
                    <span className="checkMark"></span>Sandals
                </label>

                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="heels"
                        name="test"
                    />
                    <span className="checkMark"></span>Heels
                </label>
            </div>
        </div>
    );
};

export default Category;
