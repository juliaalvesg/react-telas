import React from "react";
import styled from "styled-components";

type ContentProps = {
    className ?: string;
    children ?: string;
}

const Content = ({className, children}: ContentProps) => {
    return (
        <div className = {className}>
            {children}
        </div>
    )
}
    
export default styled(Content)`
    height: 100%;
    width: 100%; 
    grid-area: CT;
    background-color: #282c34;
`;