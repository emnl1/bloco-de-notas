import  React from 'react';
import { View, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
     

    
      <View style={styles.header}> 
      <Image
          source={require('./src/assets/lar.png')}
          style={{width: 30, height: 30}}
          resizeMode="contain"
        />
        
        
        <Image
          source={require('./src/assets/editar(1).png')}
          style={{width: 30, height: 30}}
          resizeMode="contain"
        />
        
     </View>

    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#7fffd4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,

  },
 
});