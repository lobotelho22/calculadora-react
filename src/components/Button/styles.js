import styled from 'styled-components'

export const ButtonContainer = styled.button`
    padding: 10px;
    border: ${props => props.theme.border};
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
        border: "2px solid #484848",
        bgColor: "#010B02",
        radiusBorder: "8px",
        height: "100%",
        flex: "none",
        width: "70px",
    }
}

const addBtn = {
    border: "2px solid #8b284d",
    bgColor: "#F00",
    radiusBorder: "8px",
    height: "100%",
    flex: "none",
    width: "70px",
}

const allClear = {
    border: "2px solid #8b284d",
    bgColor: "#F00",
    radiusBorder: "100%",
    height: "70px",
    width: "70px",
    flex: "none",
}

export {
    allClear,
    addBtn
}