import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = ()=>{
    return <View style={styles.divider}/>;
};


const styles = StyleSheet.create({
    divider: {
     width:'100%',
     backgroundColor: '#E5EBF2',
     height: 1,
    },
  });



export default Divider;
