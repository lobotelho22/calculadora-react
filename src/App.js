import React, { useEffect, useState } from 'react';
import Input from './components/Input'
import sideBar, { Column, Container, Content, Row } from "./styles";
import Button from './components/Button';
import { ThemeProvider } from 'styled-components';
import { allClear, addBtn } from './components/Button/styles';

const operations = ["+", "-", "/", "*"]
const SOMA = operations[0]
const SUB = operations[1]
const DIV = operations[2]
const PROD = operations[3]

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
        if (!currentNumber.includes(".")) {
            setCurrentNumber(prev => prev + ".")
        }
    }

    const handleClear = () => {
        setCurrentNumber("0")
    }

    const getTotal = () => {
        const last = currentNumber.length - 1
        if (!operations.includes(currentNumber[last])) {
            setCurrentNumber(total.toString())
        }
    }

    return (
        <Container onKeyUp={e => handleKeyUp(e.key)}>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <ThemeProvider theme={allClear}>
                        <Button label="C" onClick={() => handleClear()} />
                    </ThemeProvider>
                    <Button label={DIV} onClick={() => handleNumber(DIV)} />
                    <Button label={DIV} onClick={() => handleNumber(DIV)} />
                    <Button label={DIV} onClick={() => handleNumber(DIV)} />
                </Row>
                <Row>
                    <Button label="7" onClick={() => handleNumber("7")} />
                    <Button label="8" onClick={() => handleNumber("8")} />
                    <Button label="9" onClick={() => handleNumber("9")} />
                    <Button label="X" onClick={() => handleNumber(PROD)} />
                </Row>
                <Row>
                    <Button label="4" onClick={() => handleNumber("4")} />
                    <Button label="5" onClick={() => handleNumber("5")} />
                    <Button label="6" onClick={() => handleNumber("6")} />
                    <Button label={SUB} onClick={() => handleNumber(SUB)} />
                </Row>
                <Row>

                    <Column>

                        <Row>
                            <Button label="3" onClick={() => handleNumber("3")} />
                            <Button label="2" onClick={() => handleNumber("2")} />
                            <Button label="1" onClick={() => handleNumber("1")} />
                        </Row>
                        <Row>
                            <Button label="0" onClick={() => handleNumber("0")} />
                            <Button label="." onClick={() => handleFloat()} />
                            <Button label="=" onClick={() => getTotal()} />
                        </Row>
                    </Column>
                        <Column theme={sideBar}>
                            <ThemeProvider theme={addBtn}>
                                <Button label={SOMA} onClick={() => handleNumber(SOMA)}/>
                            </ThemeProvider>
                        </Column>
                </Row>
            </Content>
        </Container>
    );
}

export default App;
