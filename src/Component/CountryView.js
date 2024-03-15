import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { CountryData } from '../Utils/Db';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const CountryView = () => {
  const [selectItem, setSelecteditem] = useState(null);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => setSelecteditem(item.id)}
      style={[
        styles.FlatView,
        {
          backgroundColor: selectItem === item.id ? 'white' : '#41454e',
        },
      ]}>
      <View>
        <Image style={styles.Img} source={item.image} />
      </View>
      <View>
        <Text
          style={[
            styles.Text,
            {color: selectItem === item.id ? 'black' : 'white'},
          ]}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={CountryData}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      horizontal={true}
    />
  );
};

export default CountryView;

const styles = StyleSheet.create({
  Img: {
    width: scale(30),
    height: verticalScale(30),
    borderRadius: moderateScale(12),
  },
  FlatView: {
    flex:0,
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    backgroundColor: '#41454e',
    alignItems: 'center',
    marginHorizontal: moderateScale(4),
    padding: moderateScale(5),
    borderRadius: moderateScale(10),
    gap: moderateScale(5),
    height: '10%'
  },
  Text: {
    color: '#f0f0f0',
  },
});
