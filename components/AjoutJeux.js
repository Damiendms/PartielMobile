import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';

const AjoutJeux = ({onAdd}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [categorie, setCategorie] = useState('');

    const handleAdd = () => {
        onAdd({ name, price, catégorie:categorie});
        setName('');
        setPrice('');
        setCategorie('');
    };

    return (
        <View>
            <TextInput
                placeholder="Nom du jeu"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Prix"
                value={price}
                onChangeText={setPrice}
                style={styles.input}
            />
            <TextInput
                placeholder="Catégorie"
                value={categorie}
                onChangeText={setCategorie}
                style={styles.input}
            />
            <Button title="+" onPress={handleAdd} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    }


});

export default AjoutJeux;