import React from 'react';
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import ListeJeux from "./components/ListeJeux";
import Jeux from "./datas/Jeux";
import { useState } from 'react';
import AjoutJeux from "./components/AjoutJeux";
import Header from "./components/header";
import Section from "./components/Section";



const App = () => {
    const [games, setGames] = useState(Jeux);
    const [categorie, setCategorie] = useState('Tous les jeux');
    const [sortAscendant, setSortAscending] = useState(true);
    const categoriesSet = new Set(Jeux.map(game => game.catégorie));
    const categories = Array.from(categoriesSet);

    const ajoutJeux = (newGame) => {
        setGames([...games, { ...newGame, id: games.length + 1 }]);
    };

    const CategoriesChange = (category) => {
        setCategorie(category);
        if (category === 'Tous les jeux')
            setGames(Jeux);
        else
        setGames(Jeux.filter(game => category === 'Tous les jeux' ? true : game.catégorie === category));
    };

    const PrixChange = () => {
        setSortAscending(!sortAscendant);
        setGames(games.sort((a, b) => sortAscendant ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price)));
    }

  return (
    <View style={styles.con}>
      <View>
            <Header/>
      </View>
        <View style={styles.ajout}>
            <AjoutJeux onAdd={ajoutJeux} />
        </View>
        <View>
            <Section
                categories={['Tous les jeux', ...categories]}
                selectedCategory={categorie}
                onSelectCategory={CategoriesChange}
                onSortAscending={PrixChange}
                onSortDescending={PrixChange}
              />
        </View>
       <View style={{flex : 1}}>
            <ListeJeux games={games} />
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
    con: {
        flex: 1,
        flexDirection: 'column',
    },
    ajout: {
        padding: 20,
    },
});


export default App;
