import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import styles from './styles/styles';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      login: '',
      carouselItems: [
        {
          titulo: 'Livro MAGO',
          img: 'https://m.media-amazon.com/images/I/51rM2Hsb7+L.jpg',
          descricao:
            'A Saga do Mago é uma série obrigatória para qualquer leitor de fantasia. Dos admiradores de Harry Potter aos fãs de George R.R. Martin, ninguém deve perder esta obra‑prima.',
        },
        {
          titulo: 'Steve Jobs - A Biografia',
          img: 'https://m.media-amazon.com/images/I/41gwA2tBojL.jpg',
          descricao:
            'De Walter Isaacson, autor das famosas biografias de Benjamin Franklin e de Albert Einstein, esta é a biografia exclusiva de Steve Jobs.',
        },
        {
          titulo: 'A Estrada do Futuro',
          img:
            'https://images-na.ssl-images-amazon.com/images/I/41Uwu-D3ueL._SX344_BO1,204,203,200_.jpg',
          descricao:
            "'A Estrada do Futuro' discute e elabora as vantagens surpreendentes e os problemas inéditos do maravilhoso mundo novo que estará globalmente integrado por meio de canais digitais de alta velocidade",
        },
        {
          titulo: 'Jony Ive',
          img:
            'https://images-na.ssl-images-amazon.com/images/I/41XY1etj0+L._SX346_BO1,204,203,200_.jpg',
          descricao:
            'Apesar de tantos triunfos, pouco se sabe sobre esse gênio tímido a quem Jobs se referiu como seu “parceiro espiritual” na Apple.',
        },
      ],
    };
  }

  async componentDidMount() {
    const verificaLogin = await AsyncStorage.getItem('@mnwTeste:login');

    this.setState({login: verificaLogin});
  }

  async shouldComponentUpdate(nextProps, nextState) {
    return this.state.login !== (await AsyncStorage.getItem('@mnwTeste:login'));
  }

  itens({item, index}) {
    return (
      <View style={styles.itensCarrousel}>
        <Text style={{fontSize: 18, textAlign: 'center'}}>{item.titulo}</Text>
        <Image source={{uri: item.img}} style={styles.carouselImg} />
        <Text style={{fontSize: 16, textAlign: 'center'}}>
          {item.descricao}
        </Text>
      </View>
    );
  }

  logout = async () => {
    const {
      navigation: {navigate},
    } = this.props;

    await AsyncStorage.setItem('@mnwTeste:login', 'deslogado');

    navigate('Login');
  };

  render() {
    const {login} = this.state;
    let visualizarItens;
    if (login === 'logado') {
      visualizarItens = (
        <>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity style={styles.btnSubmit} onPress={this.logout}>
              <Text style={styles.submitText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Carousel
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={350}
              itemWidth={350}
              renderItem={this.itens}
              onSnapToItem={(index) => this.setState({activeIndex: index})}
            />
          </View>
        </>
      );
    } else {
      visualizarItens = (
        <View style={styles.itensTexto}>
          <Text>Realize o login para visualizar os Itens</Text>
        </View>
      );
    }
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.background}>
            <View style={styles.background2}>{visualizarItens}</View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
