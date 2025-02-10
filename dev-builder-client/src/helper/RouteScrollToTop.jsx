// Importing necessary hooks from React and React Router
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// RouteScrollToTop component definition
const RouteScrollToTop = () => {
    // Getting the current location object using useLocation hook
    const pathname = useLocation();

    // useEffect hook to trigger when pathname changes
    useEffect(() => {
        // Scroll the window to the top (0,0) whenever the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]); // Dependency array contains 'pathname', so effect runs when pathname changes

    // Return null since this component doesn't render anything
    return null;
};

// Exporting the RouteScrollToTop component to be used in other parts of the app
export default RouteScrollToTop;

