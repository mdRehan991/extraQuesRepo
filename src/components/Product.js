import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import CustomSize from './CustomSize';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Product = props => {
  const [heartIcon, setHeartIcon] = useState(false);
  const [copyIcon, setCopyIcon] = useState(false);

  const iconFunHeart = () => {
    let iconName = heartIcon ? 'heart' : 'heart-outline';
    let colorCode = heartIcon ? '#ff0000' : '#8c8c8c';
    return <Ionicons name={iconName} size={14} color={colorCode} />;
  };

  const iconFunCopy = () => {
    let iconName = copyIcon ? 'copy' : 'copy-outline';
    let colorCode = copyIcon ? '#4682b4' : '#8c8c8c';
    return <Ionicons name={iconName} size={14} color={colorCode} />;
  };

  return (
    <View>
      <View>
        <Image style={styles.image} source={props.productData.path} />
        <View style={styles.container1}>
          <Text style={styles.textNew}>NEW</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => setHeartIcon(!heartIcon)}>
            <View style={styles.heartView}>{iconFunHeart()}</View>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity onPress={() => setCopyIcon(!copyIcon)}>
            <View style={styles.heartView}>{iconFunCopy()}</View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container4}>
        <CustomSize sizeArray={props.productData.size} />
        <Text style={styles.textTop}>{props.productData.text1}</Text>
        <Text style={styles.textMiddle}>{props.productData.text2}</Text>
        <Text style={styles.textMiddle}>{props.productData.text3}</Text>
        <Text style={styles.textEnd}>{props.productData.text4}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: windowWidth / 2 - 15,
    height: windowHeight / 3 - 15,
  },

  container1: {
    width: 35,
    height: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  textNew: {
    color: 'white',
    fontSize: 11,
  },

  container2: {
    position: 'absolute',
    right: 7,
    top: 7,
  },

  heartView: {
    width: 23,
    height: 23,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container3: {
    position: 'absolute',
    right: 7,
    top: 40,
  },

  container4: {
    width: windowWidth / 2 - 16,
    marginTop: 10,
    marginBottom: 15,
  },

  textTop: {
    fontWeight: '500',
    marginBottom: 5,
  },

  textMiddle: {
    fontWeight: '300',
    marginBottom: 5,
    fontSize: 12,
  },

  textEnd: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default Product;
