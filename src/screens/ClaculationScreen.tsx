import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { NumberButton } from "../components/NumberButton"
import { OperationButton } from "../components/OperationButton"
import { Operations } from "../interfaces"
import { CleanButton } from "../components/CleanButton"
import { TouchableOpacity } from "react-native-gesture-handler"

export const CalculationScreen = ({navigation}: any) => {
const [result, setResult] = useState<number | undefined>()
const [currentOperation, setCurrentOperation] = useState<Operations | undefined>()
const [history, setHistory] = useState<string[]>([])

const goToHistory = () =>{
    navigation.push('HistoryScreen', {history})
}

const clean = () => {
    setResult(undefined)
    setCurrentOperation(undefined)
}

const operations = (number: number) =>{
if (!result){
    setResult(number)
    return
}
switch(currentOperation){
    case Operations.divide:
        setHistory((prev) => [...prev, `${result} / ${number} = ${result / number}`])
        setResult(result/number)
        setCurrentOperation(undefined)
        break;
    case Operations.minuss:
        setHistory((prev) => [...prev, `${result} - ${number} = ${result - number}`])        
        setResult(result - number)
        setCurrentOperation(undefined)
        break;
    case Operations.multiply:
        setHistory((prev) => [...prev, `${result} * ${number} = ${result * number}`])
        setResult(result * number)
        setCurrentOperation(undefined)
        break;
    case Operations.plus:
        setHistory((prev) => [...prev, `${result} + ${number} = ${result + number}`])
        setResult(result + number)
        setCurrentOperation(undefined)
        break;

}

}

    return(
       <View style={styles.mainContainer}>
        <Text style={styles.resultRow}>{result}</Text>
        <View style={styles.buttonsContainer}>
        <NumberButton value={0} onPress={operations}></NumberButton>
        <NumberButton value={1} onPress={operations}></NumberButton>
        <NumberButton value={2} onPress={operations}></NumberButton>
        <NumberButton value={3} onPress={operations}></NumberButton>
        <OperationButton value={Operations.plus} onPress={setCurrentOperation}/>
        </View>
        <View style={styles.buttonsContainer}>
        <NumberButton value={4} onPress={operations}></NumberButton>
        <NumberButton value={5} onPress={operations}></NumberButton>
        <NumberButton value={6} onPress={operations}></NumberButton>
        <NumberButton value={7} onPress={operations}></NumberButton>
        <OperationButton value={Operations.minuss} onPress={setCurrentOperation}/>
        </View>
        <View style={styles.buttonsContainer}>
        <NumberButton value={8} onPress={operations}></NumberButton>
        <NumberButton value={9} onPress={operations}></NumberButton>
        <OperationButton value={Operations.multiply} onPress={setCurrentOperation}/>
        <OperationButton value={Operations.divide} onPress={setCurrentOperation}/>
        <CleanButton value="C" onPress={clean}/>
        </View>
<TouchableOpacity onPress={goToHistory}>
    <Text style={styles.historyButtonText}>Go to history</Text>
</TouchableOpacity>

       </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        padding:10 , 

    },
    resultRow:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30

    },
    buttonsContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10 
    },
    historyButtonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})