import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomSize = props => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 5}}>
      {props.sizeArray.map((items, i) => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={styles.text1}>{items}</Text>
          </TouchableOpacity>
          {props.sizeArray.length - 1 === i ? null : (
            <Text style={styles.text2}>|</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 9,
    color: '#8c8c8c',
  },

  text2: {
    fontSize: 9,
    color: '#8c8c8c',
    marginHorizontal: 4,
  },
});

export default CustomSize;
