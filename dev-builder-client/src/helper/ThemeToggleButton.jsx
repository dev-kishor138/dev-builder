// Importing necessary hooks from React
import { useState, useEffect } from "react";

// ThemeToggleButton component definition
const ThemeToggleButton = () => {
    // 1. Initialize state for the current theme (default is 'light')
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light" // If theme exists in localStorage, use it, otherwise default to 'light'
    );
    

    // 2. Function to update the theme on the HTML element by setting the 'data-theme' attribute
    const updateThemeOnHtmlEl = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
    };

    // 4. On initial render or when 'theme' changes, update the theme on the HTML element
    useEffect(() => {
        updateThemeOnHtmlEl(theme); // Set the theme based on state
    }, [theme]); // This effect depends on 'theme', so it runs whenever 'theme' changes

    // 5. Handle the theme toggle when the button is clicked
    const handleThemeToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark"; // Toggle between 'dark' and 'light'
        setTheme(newTheme); // Update the state to the new theme
        localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
        updateThemeOnHtmlEl(newTheme); // Update the theme on the HTML element
    };

    // Return the button element with an onClick event handler
    return (
        <button
            type="button"
            data-theme-toggle
            className="w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
            onClick={handleThemeToggle} // Call the theme toggle handler when clicked
        >
            Toggle Theme
        </button>
    );
};

// Exporting the ThemeToggleButton component to be used in other parts of the app
export default ThemeToggleButton;
