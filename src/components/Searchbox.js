import React from 'react';

const Searchbox = ({ onChange }) => {
    return(
        <div className="pa2">
            <input
            className ="pa3 ba ba-green bg-lightest-blue" 
            type="search" 
            placeholder="Find Robofriends"
            onChange = {onChange}
            />
        </div>
    )
}

export default Searchbox;

