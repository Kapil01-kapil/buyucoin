import React, { Component } from 'react';
import { View, Modal, StyleSheet, ActivityIndicator} from 'react-native';
import styles from "./loaderStyle"

const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => { console.log('close modal') }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size={'large'} color={'blue'}/>
        </View>
      </View>
    </Modal>
  )
}



export default Loader;