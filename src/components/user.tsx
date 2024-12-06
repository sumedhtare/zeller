import React, {memo} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

type UserType = {
  data: {
    name: string;
    role: string;
  };
};
const User = ({data}: UserType) => {
  return (
    <TouchableOpacity style={styles.userContainer}>
      <View style={styles.userAvatar}>
        <Text style={styles.userAvatarName}>{data.name.split("")[0]}</Text>
      </View>
      <View>
      <Text style={styles.userName}>{data.name}</Text>
      <Text style={styles.userRole}>{data.role}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    userContainer:{
        height: 50,
        display: 'flex',
        flexDirection:'row',
        width:'100%',
        gap: 20,
        marginTop: 20
    },
    userAvatar:{
        width: 50,
        height:50,
        backgroundColor:'#E8F2FB',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
    },
    userAvatarName:{
        fontWeight: 'bold',
        fontSize: 18,
        color:'#0370CE',
    },
    userName:{
        fontWeight: '500',
        fontSize: 18,
    },
    userRole:{
        fontSize: 16,
        color: '#9E9E9E',
        textTransform: 'capitalize',
    },
  });

export default memo(User);
