import {StyleSheet, Dimensions} from 'react-native';

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
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 10
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