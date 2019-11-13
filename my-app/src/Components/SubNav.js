import React from 'react';


function SubNav(props) {
    const count = [1, 2, 3, 4, 5, 6];

    return (
        <div className="sub-nav">
            {count.map((item) => (
                <div>Filler Text</div>
            ))}
        </div>
    )
}

export default SubNav;