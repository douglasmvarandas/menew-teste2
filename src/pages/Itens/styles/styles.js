import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  itensCarrousel: {
    backgroundColor: '#cecece',
    borderRadius: 5,
    height: 500,
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  itensTexto: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
