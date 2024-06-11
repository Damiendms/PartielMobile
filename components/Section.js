import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Section = ({ categories, selectedCategory, onSelectCategory, onSortAscending, onSortDescending }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tit}>Catégorie</Text>
            <Picker
                selectedValue={selectedCategory}
                onValueChange={onSelectCategory}
                style={styles.picker}
            >
                <Picker.Item label="Tous les jeux" value="Tous les jeux" />
                {categories.map(category => (
                    <Picker.Item key={category} label={category} value={category} />
                ))}
            </Picker>
            <View style={styles.sor}>
                <Button title="Croissant" onPress={onSortAscending} />
                <Button title="Décroissant" onPress={onSortDescending} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    picker: {
        width: '100%',
    },
    sor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 20,
    },
    tit: {
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default Section;
