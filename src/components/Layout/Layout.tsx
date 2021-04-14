import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import Container from '@material-ui/core/Container';

//Styles
import './Layout.scss';

interface LayoutProps {
    children: boolean | ReactChild | ReactFragment | ReactPortal,
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <Container maxWidth="lg" className="layout">
            {props.children}
        </Container>
    )
};

export default Layout;