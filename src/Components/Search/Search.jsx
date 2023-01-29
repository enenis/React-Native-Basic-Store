import { StyleSheet, TextInput } from "react-native";
import styles from "./Search.style"

function Input(){
    return(
        <TextInput 
        style={styles.container}
        placeholder="Search..."
        />  
    )
}

export default Input;