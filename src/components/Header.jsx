// const Header = () => {
//     return (
//         <h1>Header component</h1>
//     )
// }
// export default Header;
//this is a simple header component that can be used in a React application. It exports a functional component that returns an h1 element with the text "Header component". You can import this component into other files and use it as needed.
// To use this component, you would typically import it into a parent component or your main application file and include it in the JSX like so:
// import Header from './path/to/Header';

import React from 'react';
const Header = () => {
    return (
        <nav className="header">
            <h1>Header component</h1>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;
// This is a simple header component that can be used in a React application. It exports a functional component that returns a navigation bar with an h1 element and a list of links. You can import this component into other files and use it as needed.n
// To use this component, you would typically import it into a parent component or your main application file and include it in the JSX like so: