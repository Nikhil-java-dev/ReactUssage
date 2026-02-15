// const Footer = () => {
//     return <h1>Footer component</h1>
// }
// export default Footer;
// This is a simple footer component that can be used in a React application. It exports a functional component that returns an h1 element with the text "Footer component". You can import this component into other files and use it as needed.

// To use this component, you would typically import it into a parent component or your main application file and include it in the JSX like so:
// import Footer from './path/to/Footer';
// Then you can use it in your JSX:
// <Footer />
// This will render the footer component wherever you include it in your application. You can also style it further using CSS or inline styles as needed.
// This component can be part of a larger application, providing a consistent footer across different pages or sections of your app.
// This is a simple footer component that can be used in a React application. It exports a functional component that returns an h1 element with the text "Footer component". You can import this component into other files and use it as needed.
// To use this component, you would typically import it into a parent component or your main application file and include it in the JSX like so:
// import Footer from './path/to/Footer';
// Then you can use it in your JSX:
// <Footer />
// This will render the footer component wherever you include it in your application. You can also style it further using CSS or inline styles as needed.
// This component can be part of a larger application, providing a consistent footer across different pages or sections of your app.
// This is a simple footer component that can be used in a React application. It exports a functional component that returns an h1 element with the text "Footer component". You can import this component into other files and use it as needed.
// To use this component, you would typically import it into a parent component or your main application file and include it in the JSX like so:
// import Footer from './path/to/Footer';
import React from 'react';
const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 My Website. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
            </ul>
        </footer>
    );
};

export default Footer;