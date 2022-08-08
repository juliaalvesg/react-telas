import React from "react";
import styled from "styled-components";
import DynamicsInput from "./DynamicsInput";

type OriginalDatabaseProps = {
    className ?: string
}

const OriginalDatabase = ({className}: OriginalDatabaseProps) =>{
    return(
        <div className={className}>
            <h1 className="h1">Original Database</h1>
            <p className="ps">System:</p>
            <DynamicsInput />
            <p className="ps">Name:</p>
            <DynamicsInput />
            <div className="grid-container">
                <div className="grid-item">
                    <div>
                        <p className="ps">Host:</p>
                        <DynamicsInput className="width-input"/>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="margin-grid-items">
                        <p className="ps">Port:</p>
                        <DynamicsInput className="width-input"/>
                    </div>
                </div>
                <div className="grid-item">
                    <div>
                        <p className="ps">User:</p>
                        <DynamicsInput className="width-input"/>
                    </div>                   
                </div>
                <div className="grid-item">
                    <div className="margin-grid-items">
                        <p className="ps">Password:</p>
                        <DynamicsInput className="width-input"/>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default styled(OriginalDatabase) `
    .className{
        width: 50%;
    }
    .grid-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .margin-grid-items {
        margin-left: 39px
    }
    .width-input {
        width: 100%
    }
    .h1{
        color: white;
        font-size: 36px;
        font-family: 'Inter';
        letter-spacing: 0.06em;
        line-height: 44px;
        font-style: normal;
        text-align: center;
    }
    .ps {
        color: #9ba4b6;
        font-family: 'Inter';
        line-height: 28px;
        font-size: 23px;
        font-weight: 500;
        margin: 0;
        padding-top: 32px;
        padding-bottom: 10px;
    }
`;