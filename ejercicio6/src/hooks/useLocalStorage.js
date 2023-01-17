import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue = null) => {
    const [value, setValue] = useState(() => {
        try {
            /* Checking if the key exists in localStorage. If it does, it returns the value of the key.
            If it doesn't, it returns the default value. */
            const item = localStorage.getItem(key);
            if (item !== null) {
                return JSON.parse(item);
            }
            return defaultValue;
        } catch (error) {
            return defaultValue;
        }
    });

    /* Setting the value of the key in localStorage to the value of the key in the state. */
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;