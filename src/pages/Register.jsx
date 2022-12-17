import style from './css/style.module.css';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import BgImage from '../utils/BgImage';
import { useState } from 'react';

export default function Register() {
    const initialFormData = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    function handleSubmit(e) {
        e.preventDefault();
        const { userName, email, password, confirmPassword } = formData;
        if (!userName || !email || !password || !confirmPassword) {
            alert('All data must be filled!!!');
            return;
        }
        console.log(formData);
        setFormData(initialFormData);
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <>
            <Header />
            <BgImage />
            <div className={style.mainContainer}>
                <div className={style.container} style={{ height: 650 }}>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <h1 className={style.h1}>Create Account</h1>
                        <div
                            className={style.inputContainer}
                            style={{ height: 450 }}
                        >
                            <div>
                                <label htmlFor="userName">Enter Username</label>
                                <input
                                    className={style.input}
                                    type="text"
                                    name="userName"
                                    placeholder="Your username"
                                    value={formData.userName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    Enter Email address
                                </label>
                                <input
                                    className={style.input}
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Enter Password</label>
                                <input
                                    className={style.input}
                                    type="text"
                                    name="password"
                                    placeholder="Your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    className={style.input}
                                    type="text"
                                    name="confirmPassword"
                                    placeholder="Repeat password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button className={style.button1} type="submit">
                            Register
                        </button>
                        <p className={style.p}>
                            Already have an account?
                            <button className={style.button2}>
                                <Link to="/SignIn" className={style.link}>
                                    Sign in
                                </Link>
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
