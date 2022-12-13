export default function Layout({ children, styles }) {
    return <div style={{ ...style, ...styles }}>{children}</div>;
}

const style = {
    height: 250,
    width: 170,
    border: 'none',
    borderRadius: 10,
    margin: '20px 0px 10px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
