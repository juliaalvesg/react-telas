import React from "react";
import styled from "styled-components";

type DynamicsInputProps = {
    className ?: string,
    placeholder ?: string,
    value ?: string,
    type ?: "password" | "text" | "number";
}

const DynamicsInput = ({className, placeholder,value,type}: DynamicsInputProps) => {
    return(
        <input className={className} placeholder={placeholder} value={value} type={type} />
    );
}

export default styled(DynamicsInput)`
   background-color: #73809c;
   border: solid 3px #434f67;
   border-radius: 10px;
   color: white;
   height: 38px;
   width: 100%;

`