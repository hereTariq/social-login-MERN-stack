// App.jsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { useAuth } from './useAuth'; // Import the custom hook

function App() {
    const user = useAuth();

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? <Home user={user} /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                />
            </Routes>
        </>
    );
}

export default App;
