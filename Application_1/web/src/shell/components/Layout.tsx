import * as React from 'react';
import Navbar from './Navbar';

interface Props {
    children?: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;