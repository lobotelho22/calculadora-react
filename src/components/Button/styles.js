import styled from 'styled-components'

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid #CDCDCD;
    color: #FFF;
    font-size: 24px;
    font-weifght: 700;
    
    background-color: ${props => props.theme.bgColor};
    border-radius: ${props => props.theme.radiusBorder};
    height: ${props => props.theme.height};
    width: ${props => props.theme.width};
    flex: ${props => props.theme.flex};
    
    &:hover {
        opacity: 0.6;
    }

`

ButtonContainer.defaultProps = {
    theme: {
        bgColor: "#00ff13",
        radiusBorder: "8px",
        height: "100%",
        flex: "1",
    }
}

const theme = {
    bgColor: "#F00",
    radiusBorder: "100%",
    height: "80px",
    width: "80px",
    flex: "none",
}

export default theme;