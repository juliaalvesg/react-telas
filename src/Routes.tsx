import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import OriginalDatabase from "./Components/OriginalDatabase";
import Layout from "./Layout";

type RoutesProps = {
    className ?: string;
}

const RoutesApp = ({ className }: RoutesProps) => {
    return(
        <div className={className}>
            <BrowserRouter>
                <Routes>
                    <Route path="/input-information" element={<OriginalDatabase />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default styled(RoutesApp)``;