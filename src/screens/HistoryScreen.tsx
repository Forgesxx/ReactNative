import React from "react";
import { StyleSheet, FlatList, View, Text} from "react-native";
export const HistoryScreen = ({route}: any) => {
    const { history } = route.params
    return(
<View>
<FlatList 
data={history}
renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
keyExtractor={({item}) => item}
/>
</View>  
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'black',
        fontSize: 15,
    }
})