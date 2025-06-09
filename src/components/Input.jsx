import React from 'react';

const Input = ({handleChange, value, title, name, color}) => {
    return (
        <div>
                <label className="sidebar-label-container">
                    <input type="radio" onChange={handleChange} value={value} name={name} />
                    <span className="checkMark" style={{backgroundColor: color}} ></span>{title}
                </label>
        </div>
    );
};

export default Input;