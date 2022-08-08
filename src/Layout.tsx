import React from "react";
import styled from "styled-components";
import MainHeader from "./Layout/MainHeader"
import Aside from "./Layout/Aside";
import Content from "./Layout/Content";

type LayoutProps = {
    className ?: string;
    children ?: any;
}

const Layout = ({className, children}: LayoutProps) => {
    return (
        <div className = {className}>
            <MainHeader/>
            <Aside/>
            <Content>{children}</Content>
        </div>
    )
}

export default styled(Layout)`
    height: 100%;
    width: 100%; 
    grid-area: AS;
    background-color: #282c34;
    border-right: 2px solid #394254;
`;