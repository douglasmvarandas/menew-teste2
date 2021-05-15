import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width,
    ImageSize = screenWidth * 0.4,
    ImageMargin = ((screenWidth - (screenWidth * 0.75) - 60) / 2);
//const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center',

    },
    header: {
        fontSize: 36,
        marginBottom: 1,
        textAlign: 'center',
        width: screenWidth - 40,
        fontWeight: 'bold',
        borderWidth: 2,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'silver'
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 10,
        color: 'black'
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 20
    },
    hide: {
        display: "none"
    },
    picture: {
        width: ImageSize,
        height: ImageSize * (16 / 9),
        marginStart: 'auto',
        marginEnd: 'auto',
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 10
    },
    headerImage: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        borderWidth: 2,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'silver'
    },
    nome: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        height: 25,
        marginBottom: 10
    },
    descricao: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        height: 125,
        marginTop: 7
    },
    imageHolder: {
        justifyContent: "center",
        alignSelf: 'center',
        padding: 10,
        paddingStart: 25,
        paddingEnd: 25,
        width: ImageSize + 150,
        height: ImageSize * (16 / 9) + 210,
        backgroundColor: 'orangered',
        marginStart: ImageMargin,
        borderRadius: 50
    },
    imageHolderExtra: {
        marginEnd: ImageMargin
    }
});

export default styles;