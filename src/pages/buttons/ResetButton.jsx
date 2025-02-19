import React from "react";
import styled from "styled-components";

const ResetButton = ({ onClick }) => {
    return (
        <StyledButton type="button" onClick={onClick}>
        <img src="./assets/Reset.png" alt="Reset" style={{ width: '25px', height: '25px' }} />
        </StyledButton>
    );
};

export default ResetButton;

const StyledButton = styled.button`
    background-color: transparent; 
    border: none; 
    cursor: pointer; 
    transition: transform 0.1s ease;
    &:active {
        transform: scale(0.9);
    }
`;
