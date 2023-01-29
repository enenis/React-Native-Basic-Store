import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TextInput
  
} from 'react-native';
import store_data from './store_data.json';
import Card from "./src/Components/Card/StoreCard"
import Input from "./src/Components/Search/Search"

function App() {

  // const [searchQuery, setSearchQuery] = React.useState('');

  return (


    <View style={styles.container}>
      
      
      <FlatList
       ListHeaderComponent={
        <View style={styles.headerspace}>
      <Text style={styles.headertitle}>PatikaStore</Text>
      <Input />
      </View>
      
      
      
       }
        data={store_data}
        renderItem={({item}) => <Card char={item}/>}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'center',
  },
  headertitle:{
    fontSize: 30,
    fontWeight: 'bold',
    color:"purple",
  },
  headerspace: {
  margin:8

  }
});
