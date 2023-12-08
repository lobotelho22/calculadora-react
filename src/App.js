import React, { useEffect, useState } from 'react';
import Input from './components/Input'
import { Container, Content, Row } from "./styles";
import Button from './components/Button';
import { ThemeProvider } from 'styled-components';
import theme from './components/Button/styles';

const operations = ["+", "-", "/", "*"]

function App() {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const last = currentNumber.length - 1
        if (!operations.includes(currentNumber[last])) {
            const returnTotal = new Function(`return ${currentNumber}`)
            setTotal(() => returnTotal())
        }
    }, [currentNumber])

    const handleNumber = (number) => {
        if ((currentNumber === "0" && operations.includes(number)) || currentNumber !== "0") {
            setCurrentNumber(prev => prev + number)
        } else {
            setCurrentNumber(number)
        }
    }

    const handleKeyUp = (key) => {
        const ALGARISMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        if (ALGARISMS.includes(key)) {
            handleNumber(key)
        }
    }

    const handleFloat = () => {
        if (!currentNumber.includes(".")){
            setCurrentNumber(prev => prev + ".")
        }
    }

    const handleClear = () => {
        setCurrentNumber ("0")
    }

    const getTotal = () => {
        const last = currentNumber.length - 1
        if (!operations.includes(currentNumber[last])){
            setCurrentNumber(total.toString())
        }
    }

    return (
        <Container onKeyUp={e => handleKeyUp(e.key)}>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <ThemeProvider theme={theme}>
                        <Button label="C" onClick={() => handleClear()} />
                    </ThemeProvider>
                </Row>
                <Row>
                    { operations.map((operator) => {
                        return(
                            <Button
                                label={operator}
                                key={`operacao-${operator}`}
                                onClick={() => handleNumber(operator)}
                            />
                        )
                    }) }
                </Row>
                <Row>
                    <Button label="9" onClick={() => handleNumber("9")}/>
                    <Button label="8" onClick={() => handleNumber("8")}/>
                    <Button label="7" onClick={() => handleNumber("7")}/>
                </Row>
                <Row>
                    <Button label="6" onClick={() => handleNumber("6")}/>
                    <Button label="5" onClick={() => handleNumber("5")}/>
                    <Button label="4" onClick={() => handleNumber("4")}/>
                </Row>
                <Row>
                    <Button label="3" onClick={() => handleNumber("3")}/>
                    <Button label="2" onClick={() => handleNumber("2")}/>
                    <Button label="1" onClick={() => handleNumber("1")}/>
                </Row>
                <Row>
                    <Button label="0" onClick={() => handleNumber("0")}/>
                    <Button label="." onClick={() => handleFloat()}/>
                    <Button label="=" onClick={() => getTotal()}/>
                </Row>
            </Content>
        </Container>
    );
}

export default App;
