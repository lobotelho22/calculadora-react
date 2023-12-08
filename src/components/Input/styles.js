import styled from 'styled-components'

export const InputContainer = styled.div`
    @font-face{
        font-family:ds-digital;
        font-style:normal;
        font-weight:400;
        src:local('DS-Digital'),
            url(https://fonts.cdnfonts.com/s/15049/DS-DIGI.woff) format('woff')
        }

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
        min-height: 75px;
        background-color: #AFA;
        border-radius: 15px;
        text-align: right;
        font-size: 3rem;
        padding: 14px 14px;

        font-weight: 400;
        font-family: 'DS-Digital', sans-serif;
    }
`