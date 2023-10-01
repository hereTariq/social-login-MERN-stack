import React from 'react';
import '../css/home.css';

function Home({ user }) {
    const logout = async () => {
        window.open('http://localhost:3000/auth/logout', '_self');
    };
    return (
        <main className="user-container">
            <div className="user">
                <h4>
                    Hi <span>{user?.username}</span>
                </h4>

                <img src={user.picture} alt={user?.username} />
            </div>

            <button className="btn" onClick={logout}>
                Logout
            </button>
        </main>
    );
}

export default Home;
