import style from './css/style.module.css';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import BgImage from '../utils/BgImage';
import { useState } from 'react';
export default function SignUp() {
    const initialFormData = {
        userName: '',
        password: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    function handleSubmit(e) {
        e.preventDefault();
        const { userName, password } = formData;
        if (!userName || !password) {
            alert('All data must be filled!!!');
            return;
        }
        console.log(formData);
        setFormData(initialFormData);
    }

    return (
        <>
            <Header />
            <BgImage />
            <div className={style.mainContainer}>
                <div className={style.container}>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <h1 className={style.h1}>Sign In</h1>
                        <div className={style.inputContainer}>
                            <div>
                                <label htmlFor="user">Enter Username</label>
                                <input
                                    className={style.input}
                                    type="text"
                                    name="user"
                                    placeholder="Your username"
                                    value={formData.userName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            userName: e.target.value,
                                        })
                                    }
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <button className={style.button1} type="submit">
                            Login
                        </button>
                        <p className={style.p}>
                            Don't have account?
                            <button className={style.button2}>
                                <Link to="/Register" className={style.link}>
                                    Register
                                </Link>
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
