import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTag from '../components/CustomTag';
import Product from '../components/Product';

const data = [
  {
    path: {
      uri: 'https://i.pinimg.com/originals/e4/3f/9c/e43f9c840c894dc0a9ac87cad581c1be.png',
    },
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    text1: 'Tommy Hilfiger',
    text2: "Men's Longsleeve T-Shirt",
    text3: 'White/Black/Red',
    text4: 'USD 299',
  },
  {
    path: {
      uri: 'https://i.pinimg.com/originals/e6/52/57/e652575fc77d76386536cd8ac0c24969.jpg',
    },
    size: [52, 50],
    text1: 'Louis Vuitton',
    text2: "Men's Slim Fit Cool Coat",
    text3: 'Blue/Black/Green',
    text4: 'USD 690',
  },
  {
    path: {
      uri: 'https://i.pinimg.com/originals/b4/5d/74/b45d74e5ffb13ca7b2cf47ef16847e1a.jpg',
    },
    size: ['M', 'L', 'XL', 'XXL', 'XXXL'],
    text1: 'Gucci ',
    text2: "Men's Loose Overcoat",
    text3: 'Brown/Gray',
    text4: 'USD 330',
  },
  {
    path: {
      uri: 'https://i.pinimg.com/originals/df/5e/fa/df5efa48065e60a42ec3a1b34f4a1309.jpg',
    },
    size: ['S', 'M', 'L', 'XL'],
    text1: 'Balenciaga',
    text2: "Men's Tank",
    text3: 'White/Black/Blue/Red',
    text4: 'USD 155',
  },
  {
    path: {
      uri: 'https://cdn.shopify.com/s/files/1/1083/6796/products/product-image-1051370402_800x.jpg?v=1579327658',
    },
    size: ['XS', 'S', 'M', 'L', 'XL'],
    text1: 'Versace',
    text2: "Men's Longsleeve Jacket",
    text3: 'Green/Brown',
    text4: 'USD 799',
  },
  {
    path: {
      uri: 'https://qph.fs.quoracdn.net/main-qimg-d4ef505f1dade4ccbfdb9061db0121c8',
    },
    size: [45, 50, 55, 60, 65, 70],
    text1: 'Prada',
    text2: "Men's Vase Coat with T-Shirt",
    text3: 'White/Black/Gray',
    text4: 'USD 199',
  },
];

const Categories = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container1}>
        <View style={styles.container1_View1}>
          <Text style={styles.container1_View1_Text}>53 items</Text>
        </View>
        <View style={styles.container1_View2}>
          <CustomButton title="SORT" iconName="swap-vertical" />
          <View style={styles.container1_View2_View1}>
            <Text style={styles.container1_View2_View1_Text}>|</Text>
          </View>
          <CustomButton title="FILTER" iconName="funnel-outline" />
          <View style={styles.container1_View2_View2}>
            <View style={styles.container1_View2_View2_View}>
              <Text style={styles.container1_View2_View2_View_Text}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <CustomTag title="Clothing" />
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.scrollView_View}>
          {data.map(item => (
            <Product productData={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#b3b3b3',
  },

  container1_View1: {
    justifyContent: 'center',
  },

  container1_View1_Text: {
    fontSize: 11,
    marginLeft: 15,
  },

  container1_View2: {
    flexDirection: 'row',
    marginRight: 10,
  },

  container1_View2_View1: {
    justifyContent: 'center',
  },

  container1_View2_View1_Text: {
    fontSize: 30,
    fontWeight: '100',
    color: '#bfbfbf',
  },

  container1_View2_View2: {
    justifyContent: 'center',
  },

  container1_View2_View2_View: {
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc800',
  },

  container1_View2_View2_View_Text: {
    fontSize: 10,
    fontWeight: '300',
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },

  scrollView: {
    marginTop: 10,
  },

  scrollView_View: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default Categories;
