import React from "react";
import styled from "styled-components";

export default function Container(props) {
    return (
        <CONTAINER>
            {props.children}
        </CONTAINER>
    )
}

const CONTAINER = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;
    width: 1200px;
    min-height: 75%;
`