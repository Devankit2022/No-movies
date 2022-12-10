import React from 'react';

const Layout = ({ children, styles }) => {
    return <div style={{ ...style, ...styles }}>{children}</div>;
};

export default Layout;

const style = {
    height: 250,
    width: 165,
    border: '2px solid grey',
    borderRadius: 10,
    margin: '20px 0px 10px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
