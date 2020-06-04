import React from 'react';
import styled from 'styled-components';

const SideBarStyled = styled.div`
    height: 100%;
`;

const SideBarContainerStyled = styled.div`
    height: 100%;
`;

const Sidebar = ({ children }) => (
    <SideBarStyled>
        <SideBarContainerStyled>
            {children}
        </SideBarContainerStyled>
    </SideBarStyled>
);

export default Sidebar;