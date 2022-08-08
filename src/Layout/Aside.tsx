import React from "react";
import styled from "styled-components";

type AsideProps = {
    className ?: string;
    children ?: string;
}

const Aside = ({className, children}: AsideProps) => {
    return (
        <div className = {className}>
            {children}
        </div>
    )
}

export default styled(Aside)`
    height: 100%;
    width: 100%; 
    grid-area: AS;
    background-color: #282c34;
    border-right: 2px solid #394254;
`;