import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: '#fffafa',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
    width: screenWidth,
    height: screenHeight,
  },
  background2: {
    backgroundColor: '#fffafa',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 60,
    width: screenWidth,
    height: screenHeight,
  },
  containerlogo: {
    marginTop: 15,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  txtWelcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#191919',
    alignSelf: 'center',
    padding: 15,
  },
  btnSubmit: {
    backgroundColor: '#708090',
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 20,
    marginTop: 15,
    borderRadius: 7,
  },
  submitText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
  },
  inputT1: {
    fontSize: 14,
    padding: 5,
    borderColor: '#708090',
    // borderWidth: 1.5,
    borderBottomWidth: 1.5,
    borderRadius: 10,
    marginBottom: 20,
    width: 220,
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
  },
});

export default styles;
