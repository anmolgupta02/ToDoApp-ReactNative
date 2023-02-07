/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <View style={style.square}></View>
        <Text style={style.itemText}> {props.text}</Text>
        </View>
        <View style={style.circular}></View>
    </View>
  );
};

const style = StyleSheet.create({
    item : {
        backgroundColor:'#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems:"center",
        flexWrap:'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#23C4ED',
        opacity:0.4,
        borderRadius:5,
        marginRight: 15,
    },
    itemText:{
        maxWidth:'90%',
        color:'#000'
    },
    circular:{
        width:12,
        height:12,
        borderWidth: 2,
        borderColor:'#2827CC',
        borderRadius:5,
    },
});

export default Task;
