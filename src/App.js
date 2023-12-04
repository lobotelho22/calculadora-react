import React, { useState } from 'react';
import Input from './components/Input'
import { Container, Content, Row } from "./styles";
import Button from './components/Button';

const [entrance, setEntrance] = useState()

const operations = ["+", "-", "/", "*"]

function App() {
    return (
        <Container>
            <Content>
                <Input />
                <Row>
                    { operations.map((operator) => {
                        return(
                            <Button label={operator} />
                        )
                    }) }
                </Row>
                <Row>
                    <Button label="9" />
                    <Button label="8" />
                    <Button label="7" />
                </Row>
                <Row>
                    <Button label="6" />
                    <Button label="5" />
                    <Button label="4" />
                </Row>
                <Row>
                    <Button label="3" />
                    <Button label="2" />
                    <Button label="1" />
                </Row>
                <Row>
                    <Button label="0" />
                    <Button label="." />
                    <Button label="=" />
                </Row>
            </Content>
        </Container>
    );
}

export default App;
