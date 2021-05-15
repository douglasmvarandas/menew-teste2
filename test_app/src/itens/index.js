/**
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';

import styles from './styles/styles';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            orientation: isPortrait(),
            clickPosition: itensList.length,
        };
    }

    onLayoutChange = async () => {
        this.setState({
            orientation: isPortrait(),
        });
    };

    onImageClick = async index => {
        this.setState({
            clickPosition:
                this.state.clickPosition === index ? itensList.length : index,
        });
    };

    render() {
        const itensList_Len = itensList.length,
            isPortrait = this.state.orientation,
            clickPosition = this.state.clickPosition,
            cardHolder = isPortrait
                ? styles.cardHolder
                : styles.cardHolderLandscape,
            imgHolder = isPortrait
                ? styles.imageHolder
                : styles.imageHolderLandscape,
            styleNome = isPortrait ? styles.nome : styles.nomeLandscape,
            styleDescricao = isPortrait
                ? styles.descricao
                : styles.descricaoLandscape,
            imageHolderBig = isPortrait
                ? styles.imageHolderBig
                : styles.imageHolderBigLandscape,
            extraStyle = [cardHolder, styles.cardHolderExtra];

        return (
            <View
                style={styles.inner}
                onLayout={this.onLayoutChange.bind(this)}>
                <Text style={styles.headerList}>IMDb Top Rated Movies</Text>

                <ScrollView
                    horizontal={true}
                    ref={ref => (this.ScrollView = ref)}
                    onContentSizeChange={() => {
                        this.ScrollView.scrollTo({y: 0});
                    }}>
                    {itensList.map((position, index) => (
                        <View
                            style={
                                itensList_Len === index + 1
                                    ? extraStyle
                                    : cardHolder
                            }
                            key={'view' + index}>
                            <Text
                                style={
                                    clickPosition === index
                                        ? styles.hide
                                        : styleNome
                                }
                                key={'name' + index}>
                                {position.nome}
                            </Text>

                            <View
                                style={
                                    clickPosition === index
                                        ? imageHolderBig
                                        : imgHolder
                                }
                                key={'view_iner' + index}>
                                <Pressable
                                    key={'press' + index}
                                    onPress={() => {
                                        this.onImageClick(index);
                                    }}>
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
                                style={
                                    clickPosition === index
                                        ? styles.hide
                                        : styleDescricao
                                }
                                key={'desc' + index}>
                                {position.descrição}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

//Lista dos Filmes com melhor classificação do IMDb https://www.imdb.com/chart/top/?ref_=nv_mv_250
const itensList = [
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        nome: 'The Shawshank Redemption (1994)',
        descrição:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1.jpg',
        nome: 'The Godfather (1972)',
        descrição:
            "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    },
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        nome: 'The Godfather: Part II (1974)',
        descrição:
            'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    },
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        nome: 'The Dark Knight (2008)',
        descrição:
            'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    },
    {
        foto: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
        nome: '12 Angry Men (1957)',
        descrição:
            'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    },
];

//verifica se o aparelho esta de pé
const isPortrait = () => {
    const dim = Dimensions.get('window');

    return dim.height >= dim.width;
};
