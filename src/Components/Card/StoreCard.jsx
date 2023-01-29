import React from 'react'
import { View,StyleSheet,FlatList,Text,Image,Dimensions, SafeAreaView, } from 'react-native';

function Card({char}) {
return(
    <View style={styles.card}>
        <Image
        style={styles.image}
        source={{uri:char.imgURL}}
        />
        <View>
            <Text style={styles.title}>{char.title}</Text>
            {char.inStock ? <Text style={styles.price}>{char.price}</Text>:<Text style={styles.out_of_stock}>STOKTA YOK</Text>}
        </View>
    </View>
)

}

export default Card

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#eceff1',
        borderRadius:10,
        padding:10,
        width:Dimensions.get("window").width/2.2,
        margin: 5,


    },
    image:{
        height: Dimensions.get('window').height / 4,
        borderRadius:10,
        alignContent:"center",
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    price:{
        textAlign:"right"
    },
    out_of_stock:{
        color:"red",
        fontWeight:"bold",
        textAlign:"right",

    }
})