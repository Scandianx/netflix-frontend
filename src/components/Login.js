// Login.jsx
import React, { useState } from 'react';
import '../styles/Login.css';
import netflixLogo from '../assets/netflixLogo.png';

const Login = ({ toggleAuth, onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailBlur = () => {
        setEmailTouched(true);
    };

    const handlePasswordBlur = () => {
        setPasswordTouched(true);
    };

    const canSubmit = () => {
        if (!emailTouched || !passwordTouched) {
            return false;
        }

        if (!(password.length >= 4 && password.length <= 60)) {
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!canSubmit()) {
            return;
        }

        // Your login logic here
        const userData = {
            login: email,
            password: password
        };

        // Example of sending a POST request to localhost:80/auth/login
        fetch('http://localhost:8081/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => response.json())
        .then(response => {
            console.log(response.token)
            if (response.token) {
                onLogin();
                localStorage.setItem('token', response.token);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="corpo">
            <div className="upper">
                <div className="logo">
                    <img src={netflixLogo} className="img-logo" alt="Netflix Logo" />
                </div>
                <div className="login-div">
                    <form className="login" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="input-text">
                            <input
                                type="text"
                                id="inputEmail"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                            />
                            {(emailTouched && !validateEmail(email)) && (
                                <div className="warning-input"><h5>Please enter a valid email.</h5></div>
                            )}
                        </div>
                        <div className="input-text">
                            <input
                                type="password"
                                id="inputPassword"
                                name="password"
                                placeholder="Senha"
                                value={password}
                                onChange={handlePasswordChange}
                                onBlur={handlePasswordBlur}
                            />
                            {passwordTouched && !(password.length >= 4 && password.length <= 60) && (
                                <div className="warning-input">Your password must contain between 4 and 60 characters.</div>
                            )}
                        </div>
                        <div>
                            <button className="signin-button" type="submit" disabled={!canSubmit()}>
                                Entrar
                            </button>
                        </div>
                        <div className="remember-flex">
                            <div>
                                <input type="checkbox" />
                                <label className="color_text">Lembrar-me</label>
                            </div>
                        </div>
                        <div className="new-members">
                            Novo na MyNetflix? <button type="button" className="signup-link" onClick={toggleAuth}>Registrar</button>.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
