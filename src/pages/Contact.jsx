import { useState } from 'react';
import Header from '../components/header';
import BgImage from '../utils/BgImage';
import style from './css/style.module.css';
export default function Contact() {
    const initialFormData = {
        userName: '',
        email: '',
        message: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    function handleSubmit(e) {
        e.preventDefault();
        const { userName, email, message } = formData;
        if (!userName || !email || !message) {
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
                <div
                    className={style.container}
                    style={{
                        height: 570,
                    }}
                >
                    <form className={style.form} onSubmit={handleSubmit}>
                        <h1 className={style.h1}>Contact Developer</h1>
                        <div
                            className={style.inputContainer}
                            style={{
                                height: 400,
                            }}
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
                                <label htmlFor="email">Enter Email</label>
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
                                <label htmlFor="message">Enter Query</label>
                                <textarea
                                    style={{
                                        height: 100,
                                    }}
                                    className={style.input}
                                    type="text"
                                    name="message"
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button className={style.button1} type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
