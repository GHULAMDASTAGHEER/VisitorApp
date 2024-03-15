import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../Utils/Colors';
const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.profileView}>
      <View style={styles.profile}>
        <Image style={styles.ProfileImg} source={require('../Assets/Images/Profile.png')} />
        <Text style={styles.txt}>Olive Castillo</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnTxt}>Bonus$453</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
      },
      ProfileImg:{
        width:scale(40),
        height:verticalScale(40),
        borderRadius:moderateScale(50),
        resizeMode:'cover',
        backgroundColor:'white',
    },
    profile:{
        flexDirection:'row',
        gap:moderateScale(10),
        alignItems:'center',
    },
    txt:{
        color:'white',
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(14.5)
    },
    profileView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:moderateVerticalScale(10),
        // marginHorizontal:moderateScale(20)
    },
    btn:{
        backgroundColor:SECONDARY_COLOR,
        // width:'25%',
        height:verticalScale(35),
        alignItems:'center',
        justifyContent:'center',
        padding:moderateScale(8),
        borderRadius:moderateScale(12)
      },
      btnTxt:{
        color:'white',
        fontFamily:'Poppins-Medium',
      }
})