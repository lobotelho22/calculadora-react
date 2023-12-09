import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({label, onClick}) => {

    return (
        <ButtonContainer onClick={onClick} onKeyDown={e => e.preventDefault()}>
            {label}
        </ButtonContainer>
    )
}

export default Button;
