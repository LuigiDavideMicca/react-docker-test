import React from 'react';

const Header = ({name}) => {
    if(!name) {
        return (
            <h5>Sorry, no name found</h5>
        )
    }
    return (
        <div className="my-5">
            <h5>Hello {name}</h5>
        </div>
    )
}

export default Header;