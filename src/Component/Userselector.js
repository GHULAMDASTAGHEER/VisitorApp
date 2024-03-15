import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import UserModal from './UserModal';
import { data } from '../Utils/Db';
import {useIsFocused} from '@react-navigation/native';

const Userselector = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  let isfocus = useIsFocused();

  useEffect(() => {
    if (isfocus) {
      setModalVisible(false);
    }
  }, [isfocus]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.FlatView}
      onPress={() => handleItemPress(item)}>
      <Text style={{display: 'none'}}>{item.des}</Text>
      <Text style={{display: 'none'}}>{item.description}</Text>
      <View>
        <Image style={styles.Img} source={item.image} />
        <Text style={styles.Text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleItemPress = user => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
      />
      {modalVisible && (
        <UserModal
          visible={modalVisible}
          closeModal={closeModal}
          userData={selectedUser}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Img: {
    width: scale(100),
    height: verticalScale(100),
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: moderateScale(12),
    position: 'relative',
  },
  FlatView: {
    paddingHorizontal: moderateScale(10),
  },
  Text: {
    color: '#f0f0f0',
    position: 'absolute',
    bottom: moderateScale(5),
    width: '50%',
    marginHorizontal: moderateScale(10),
  },
});

export default Userselector;
