import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState({} as any);

    useEffect(() => {
        // Logic to check if the user is authenticated
        const token = localStorage.getItem('token');
        if (token) {
            // Fetch user data from API or storage
            const userData = {
                id: '123',
                name: 'John Doe',
                // ... other user data
            };
            setUser(userData);
        }
    }, []);

    return user;
};
