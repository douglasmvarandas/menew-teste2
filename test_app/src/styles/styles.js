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
    }
});

export default styles;