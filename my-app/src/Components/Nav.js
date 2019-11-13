import React from 'react';
import { Route, Link } from 'react-router-dom';
import SubNav from './SubNav.js'


function Nav(props) {
    const items = ['Mac', 'iPhone', 'iPad', 'Watch', 'TV', 'Music', 'Support'];

    return (
        <div className="main-nav">
            {items.map((item, index) => (
                <div>
                    <Link key={index} exact to={`/${item}`} >{item}</Link>
                </div>
            ))}
        </div>

    )
}

export default Nav;
