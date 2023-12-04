import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAA;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    padding: 0 20px;

    input {
        width: 100%;
        min-height: 55px;
        background-color: #AFA;
        border-radius: 15px;
        text-align: right;

        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`