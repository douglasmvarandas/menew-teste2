import React, {Component} from 'react';

import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    Text,
    View
} from 'react-native';

import styles from './styles/styles';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            orientation: isPortrait()
        };

    }

    onLayout() {
        console.log('onLayout');
        this.setState({
            orientation: isPortrait()
        });
    }

    render() {

        const images_len = itemData.length,
            isPortrait = this.state.orientation,
            cardHolder = isPortrait ? styles.cardHolder : styles.cardHolderLandscape,
            extraStyle = [cardHolder, styles.cardHolderExtra];

        const imageClick = () => {
            console.log('Click');
        }

        return (

            <View style={styles.inner}
                onLayout={this.onLayout.bind(this)}>

                <Text style={styles.headerList}>Top Rated Movies</Text>

                <ScrollView
                    horizontal={true}
                    ref={ref => this.ScrollView = ref}
                    onContentSizeChange={() => {
                        this.ScrollView.scrollTo({y: 0})
                    }}>

                    {itemData.map((position, index) =>

                        <View
                            style={(images_len === (index + 1)) ? extraStyle : cardHolder}
                            key={'view' + index}>

                            <Text
                                style={isPortrait ? styles.nome : styles.nomeLandscape}
                                key={'name' + index}>{position.nome}</Text>

                            <View
                                style={isPortrait ? styles.imageHolderPortrait : styles.imageHolderLandscape}
                                key={'view_iner' + index}>

                                <Pressable
                                    key={'press' + index}
                                    onPress={imageClick}>

                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: position.foto,
                                        }}
                                        key={'image' + index}
                                    />

                                </Pressable>

                            </View>

                            <Text
                                style={isPortrait ? styles.descricao : styles.descricaoLandscape}
                                key={'desc' + index}>{position.descrição}</Text>

                        </View>
                    )}

                </ScrollView>

            </View>
        );
    }
}

const itemData = [
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        nome: 'The Shawshank Redemption',
        descrição: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY225_.jpg',
        nome: 'The Godfather',
        descrição: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
    },
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        nome: 'The Godfather: Part II',
        descrição: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    },
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        nome: 'The Dark Knight',
        descrição: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    },
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
        nome: '12 Angry Men',
        descrição: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    },
];

const isPortrait = () => {
    const dim = Dimensions.get('window');

    return dim.height >= dim.width;
};