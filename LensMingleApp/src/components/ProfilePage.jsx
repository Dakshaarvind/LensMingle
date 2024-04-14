import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router

const ProfilePage = () => {
    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signinUsername, setSigninUsername] = useState('');
    const [signinPassword, setSigninPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory(); // Get the history object from React Router

    const handleSignUp = () => {
        if (!signupUsername || !signupPassword) {
            setError('Please enter a username and password for sign up.');
            return;
        }
        // Handle sign up logic here
        console.log('Signing up:', signupUsername, signupPassword);
    };

    const handleSignIn = () => {
        if (!signinUsername || !signinPassword) {
            setError('Please enter a username and password for sign in.');
            return;
        }
        // Assume sign-in verification logic here
        // If sign-in is successful, redirect to FilterPage
        // For demonstration purposes, directly redirecting to FilterPage
        history.push('/filter');
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Username"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>

            <h2>Sign In</h2>
            <input
                type="text"
                placeholder="Username"
                value={signinUsername}
                onChange={(e) => setSigninUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={signinPassword}
                onChange={(e) => setSigninPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>

            {error && <p>{error}</p>}
        </div>
    );
};

export default ProfilePage;
