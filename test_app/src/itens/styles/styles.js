import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width,
    screenHeight = Dimensions.get('window').height,
    screenDefault = screenWidth < screenHeight ? screenWidth : screenHeight;

const ImageSize = screenDefault * 0.4,
    ImageMargin = ((screenDefault - (screenDefault * 0.75) - 60) / 2),
    SizeOffset = 0.7;


const styles = StyleSheet.create({
    inner: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center',

    },
    imageHolderLandscape: {
        position: 'absolute',
        width: ImageSize * SizeOffset,
        height: ImageSize * SizeOffset * (16 / 9),
        marginStart: 10,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 10
    },
    imageHolderBigPortrait: {
        position: 'absolute',
        width: '115%',
        height: '102%',
        zIndex: 100,
        left: '50%',
        transform: [{translateX: -112}],
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 50,
        overflow: 'hidden'
    },
    imageHolderBig: {
        position: 'absolute',
        width: '30%',
        height: '105%',
        zIndex: 100,
        left: '50%',
        transform: [{translateX: -70}],
        marginEnd: 'auto',
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageHolderPortrait: {
        width: ImageSize,
        height: ImageSize * (16 / 9),
        marginStart: 'auto',
        marginEnd: 'auto',
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
        borderRadius: 5
    },
    headerList: {
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
    nomeLandscape: {
        color: 'white',
        width: screenDefault,
        left: ImageSize * SizeOffset,
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
    descricaoLandscape: {
        color: 'white',
        width: screenDefault,
        left: ImageSize * SizeOffset,
        fontSize: 17,
        textAlign: 'center',
        height: 125,
        marginTop: 7
    },
    cardHolderLandscape: {
        justifyContent: "center",
        alignSelf: 'center',
        padding: 10,
        paddingStart: 25,
        paddingEnd: 25,
        width: screenDefault * 1.4,
        height: screenDefault * 0.05 * (16 / 9) + 210,
        backgroundColor: 'orangered',
        marginStart: ImageMargin,
        borderRadius: 25,
        overflow: 'hidden'
    },
    cardHolder: {
        justifyContent: "center",
        alignSelf: 'center',
        padding: 10,
        paddingStart: 25,
        paddingEnd: 25,
        width: screenDefault * SizeOffset,
        height: screenDefault * 0.4 * (16 / 9) + 210,
        backgroundColor: 'orangered',
        marginStart: ImageMargin,
        borderRadius: 50,
        overflow: 'hidden'
    },
    cardHolderExtra: {
        marginEnd: ImageMargin,
        overflow: 'hidden'
    },
    hide: {
        display: "none"
    }
});

export default styles;