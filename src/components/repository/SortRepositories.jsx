import React, { useState } from 'react';
import { View, Modal,  StyleSheet } from 'react-native';
import { Button, Menu, Divider, Provider, IconButton, Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { sortRepositories } from '../../redux/reducers/repositoriesReducer';

const styles = StyleSheet.create({
    modalBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080'
    },
    modalInfo: { 
        width: 300,
        height: 200,
        backgroundColor: '#fff',
        padding: 20
    }
})

const SortRepositories = () => {
    const dispatch = useDispatch();
    const sortText = useSelector(state => state.repositories.sortText);
    const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
        <Button onPress={openMenu}>{sortText}</Button>
            <Modal animationType="slide" transparent={true} visible={visible}>    
                <View style={styles.modalBox}>
                    <IconButton
                        icon="close"
                        style={{ backgroundColor: '#eee' }}
                        color={Colors.red500}
                        size={20}
                        onPress={closeMenu}
                    />
                    <View style={styles.modalInfo}>
                        <Divider />
                        <Menu.Item onPress={() => {
                            dispatch(sortRepositories('CREATED_AT', 'Latest repositories', 'DESC'))
                        }} title="Latest repositories" />
                        <Menu.Item onPress={() => {
                            dispatch(sortRepositories('RATING_AVERAGE', 'Highest rated repositories', 'DESC'))
                        }} title="Highest rated repositories" />
                        <Menu.Item onPress={() => {
                            dispatch(sortRepositories('RATING_AVERAGE', 'Lowest rated repositories', 'ASC'))
                        }} title="Lowest rated repositories" />
                        <Divider />
                    </View>
                </View>
            </Modal>
    </Provider>
  );
};

export default SortRepositories;