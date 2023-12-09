import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #010B02;
    width: 320px;
    min-height: 420px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-height: 60px;
    width: 100%
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-width: ${props => props.theme.minWidth};
    align-self: ${props => props.theme.alignSelf};
    padding-right: ${props => props.theme.paddingRight};
    padding-bottom: ${props => props.theme.paddingBottom}
`

Column.defaultProps = {
    theme: {
        minWidth: "75%",
        alignSelf: "unset",
    }
}

const sideBar = {
    minWidth: "25%",
    alignSelf: "stretch",
    paddingRight: "5px",
    paddingBottom: "4px"
}

export default sideBar;