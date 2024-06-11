import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Game from './Game';

const ListeJeux = ({ games }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
                {games.map(game => (
                    <Game key={game.id} game={game} />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default ListeJeux;
