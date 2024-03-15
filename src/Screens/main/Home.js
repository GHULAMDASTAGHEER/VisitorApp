import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import {PRIMARY_COLOR} from '../../Utils/Colors';
import Userselector from '../../Component/Userselector';
import {moderateScale} from 'react-native-size-matters';
import CountryView from '../../Component/CountryView';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#060910" barStyle={'light-content'} />
      <View style={styles.Header}>
        <Header />
      </View>
      <View style={styles.Userselector}>
        <Userselector />
      </View>
      <CountryView />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: moderateScale(15),
  },
  Header: {
    flex: 0.2,
  },
  Userselector: {
    flex: 0.33,
  },
});
