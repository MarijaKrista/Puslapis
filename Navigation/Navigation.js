import React from 'react';
import './Navigation.scss';

const navigation = props => (
<header className="navigation">
    <nav className="navigation_bar">
        <div></div>
        <div className="navigation_home"><a href = "/">Home</a></div>
        <div className="space"></div>
        <div className="navigation_items">
            <ul>
                <li><a href="/">Who</a></li>
                <li><a href="/">What</a></li>
                <li><a href="/">Where</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    </nav>
</header>
);

export default navigation;
