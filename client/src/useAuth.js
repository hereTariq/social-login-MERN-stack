import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(
                    'http://localhost:3000/auth/login/success',
                    {
                        method: 'GET',
                        credentials: 'include',
                    }
                );
                if (response.status === 200) {
                    const data = await response.json();
                    setUser(data.user);
                } else {
                    setUser(null);
                }
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchUser();
    }, []);

    return user;
};
