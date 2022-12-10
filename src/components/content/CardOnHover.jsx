import React from 'react';
import Layout from './Layout';
import style from '../css/CardOnHover.module.css';
import { RxTriangleRight } from 'react-icons/rx';
const CardOnHover = () => {
    return (
        <Layout styles={layer}>
            <div className={style.play}>
                <RxTriangleRight size={50} />
            </div>
        </Layout>
    );
};

export default CardOnHover;

const layer = {
    backgroundColor: '#38363682',
    border: 'none',
    cursor: 'pointer',
};
