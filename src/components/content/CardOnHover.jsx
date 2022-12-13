import Layout from './Layout';
import style from './CardShow.module.css';
import { RxTriangleRight } from 'react-icons/rx';

export default function CardOnHover() {
    return (
        <Layout styles={layer}>
            <div className={style.play}>
                <RxTriangleRight size={50} />
            </div>
        </Layout>
    );
}

const layer = {
    backgroundColor: '#38363682',
    border: 'none',
    cursor: 'pointer',
};
