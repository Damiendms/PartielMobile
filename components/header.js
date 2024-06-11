import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import jeux from "../datas/Jeux";



const header = () => {
    return (
        <View style={styles.appbar}>
            <Text style={styles.appbartitle}>DamienLeBoss69</Text>
            <Text style={styles.appbartitle} >Nombre de jeux :  {jeux.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#e39727',
        height: 80,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appbartitle: {
        color: '#fff',
        fontSize: 20,
    },

});

export default header;