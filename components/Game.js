import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Game = ({ game }) => {
    return (
        <View style={styles.cont}>
            <Image source={{ uri: game.image }} style={styles.thumbnail}/>
            <Text style={styles.title}>{game.name}</Text>
            <Text style={styles.price}>${game.price}</Text>
            <Text style={styles.catégorie}>{game.catégorie}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cont: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        width: '50%',
        borderColor: 'black',
        borderWidth: 1,
    },
    thumbnail: {
        width: 130,
        height: 130,
    },
});

export default Game;
