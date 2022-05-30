import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator, Text } from 'react-native';

export const Loader = (props) => {
  const { loading, ...attributes } = props;
  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} size='large' color='red' />
          <Text>Carregando...</Text>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000090',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#fff',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
