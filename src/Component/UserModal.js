import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../Utils/Colors';

const UserModal = ({userData, closeModal}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);

  const handleReadMore = () => {
    navigation.navigate('Description', {userData});
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    closeModal();
  };

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleCloseModal}
      animationType="slide">
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <View style={styles.backgroundContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.upperTxt}>Popular places</Text>
            {userData && (
              <View>
                <View style={styles.ModalView}>
                  <Image style={styles.Img} source={userData.image} />
                  <View>
                    <Image style={styles.Img2} source={userData.image} />
                    <View style={styles.ModalTextView}>
                      <Text style={styles.ModalText}>{userData.des}</Text>
                      <Text style={{display: 'none'}}>{userData.text}</Text>
                      <Text style={{display: 'none'}}>
                        {userData.description}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleReadMore}>
                  <Text style={styles.btnTxt}>Read More</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '6%',
    width: '100%',
    paddingHorizontal: moderateScale(15),
    paddingTop: '5%',
    borderTopStartRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  upperTxt: {
    fontSize: moderateScale(20),
    color: PRIMARY_COLOR,
    fontFamily: 'Poppins-SemiBold',
  },
  Img: {
    width: '50%',
    height: '100%',
    borderWidth: 1,
    borderRadius: moderateScale(15),
  },
  ModalView: {
    flexDirection: 'row',
    gap: moderateScale(10),
  },
  ModalTextView: {
    width: '20%',
    backgroundColor: '#efeff1',
    marginTop: '1%',
    borderRadius: moderateScale(12),
  },
  Img2: {
    width: '20%',
    height: moderateScale(100),
    borderRadius: moderateScale(12),
  },
  ModalText: {
    width: '100%',
    fontSize: moderateScale(15.5),
    padding: moderateScale(10),
    color: PRIMARY_COLOR,
  },
  btn: {
    backgroundColor: SECONDARY_COLOR,
    width: '100%',
    padding: moderateScale(12),
    marginTop: moderateScale(10),
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
});

export default UserModal;
