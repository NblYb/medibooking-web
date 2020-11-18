import React from 'react';
import styled from 'styled-components';
import SignUpPage from '../../../../../SignUpPage';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignUpModel = () => {
    return(
        <Overlay>
            <SignUpPage />
        </Overlay>
    )
}
export default SignUpModel;