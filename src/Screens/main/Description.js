import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SECONDARY_COLOR} from '../../Utils/Colors';

const Description = ({route}) => {
  const {userData} = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.Img} source={userData.image} />
      <View style={styles.ImgView}>
        {Array.from({length: 3}).map((_,index) => (
          <Image key={index} style={styles.ViewImg} source={userData.image} />
        ))}
      </View>
      <View style={styles.DescriptionView}>
        <View style={styles.Header}>
          <Text style={styles.title}>{userData.text}</Text>
          <View style={styles.ReviewGroup}>
            <AntDesign name="star" color={'black'} size={moderateScale(20)} />
            <Text style={styles.txt}>4.9k(7k review)</Text>
          </View>
        </View>
        <View>
          <Text style={styles.description}>
            {userData.description}
            <Text style={styles.Readmore}> ...Read more</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Add calendar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity style={styles.icon} onPress={handleGoBack}>
          <AntDesign
            name="arrowleft"
            color={'white'}
            size={moderateScale(20)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="hearto" color={'white'} size={moderateScale(20)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Img: {
    width: '100%',
    flex: 1,
  },
  DescriptionView: {
    flex: 0.5,
    borderTopStartRadius: moderateScale(18),
    backgroundColor: 'white',
    borderTopRightRadius: moderateScale(18),
    position: 'relative',
    bottom: 10,
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(16),
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  txt: {
    color: '#3e3d40',
    fontSize: moderateScale(15),
    fontFamily: 'Poppins-Regular',
  },
  description: {
    fontSize: moderateScale(14),
    marginTop: '10%',
    color: '#919191',
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    backgroundColor: SECONDARY_COLOR,
    width: '100%',
    padding: moderateScale(12),
    marginTop: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(10),
    borderRadius: moderateScale(15),
  },
  btnTxt: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: 'Poppins-Medium',
  },
  iconView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  icon: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: moderateScale(8),
    borderRadius: moderateScale(12),
  },
  ViewImg: {
    width: scale(70),
    height: verticalScale(70),
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: 'white',
  },
  ImgView: {
    position: 'absolute',
    width: '70%',
    flexDirection: 'row',
    gap: moderateScale(10),
    elevation: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: moderateScale(15),
    padding: moderateScale(8),
    top: '45%',
  },
  Readmore: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  ReviewGroup: {
    flexDirection: 'row',
    gap: moderateScale(5),
  },
});

export default Description;
