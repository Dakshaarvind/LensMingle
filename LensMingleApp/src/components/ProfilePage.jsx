import React, { useState } from 'react';

const ProfilePage = () => {
    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signinUsername, setSigninUsername] = useState('');
    const [signinPassword, setSigninPassword] = useState('');
    const [error, setError] = useState('');

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
        // Handle sign in logic here
        console.log('Signing in:', signinUsername, signinPassword);
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