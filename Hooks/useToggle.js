import { useState } from "react";

/**
 * Custom React hook for creating a toggle state and function.
 *
 * @param {any} defaultValue - The initial state value of the toggle.
 * @returns {Array} An array containing the current state value and a function to toggle the state.
 */
export default function useToggle(defaultValue) {
    // The state value and setter created using React's useState hook.
    const [value, setValue] = useState(defaultValue);

    // Function to toggle the state value.
    function toggleValue(value) {
        setValue(currentValue =>
            typeof value === "boolean" ? value : !currentValue
        );
    }

    // Return an array with the current state value and the toggle function.
    return [value, toggleValue];
}
