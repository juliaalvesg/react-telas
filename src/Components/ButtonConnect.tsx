import React from "react";
import styled from "styled-components";

type ButtonConnectProps = {
    className ?: string;
    value ?: string;

}

const ButtonConnect = ({className, value }: ButtonConnectProps) => {
    return (
        <div>
            <button className="btn">{value}</button>
        </div>
    )
}

export default styled(ButtonConnect)`
    .btn {
        background-color: #282c34;
        border: solid 2px #538bed;
        border-radius: 8px; 
    }
`