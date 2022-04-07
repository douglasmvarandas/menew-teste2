export interface iUser {
  avatar?: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  isLogged?: boolean;
}

export const Users: iUser[] = [
  {
    avatar: 'https://github.com/rickson-lima.png',
    name: 'Rickson Lima',
    cpf: '123.456.789-00',
    email: 'hello@world.com',
    password: '123',
  },
];

export interface iProducts {
  id: number;
  category: string;
  urlImage: string;
  title: string;
  description: string;
  price?: number;
}

export const DrinksCollection: iProducts[] = [
  {
    id: 0,
    category: 'Drink',
    urlImage: 'https://coca-colafemsa.com/wp-content/uploads/2020/02/2-30.png',
    title: 'Coca-Cola Zero',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 4,
  },
  {
    id: 1,
    category: 'Drink',
    urlImage:
      'https://coolicias.ao/wp-content/uploads/2020/02/Receita-de-Suco-de-Maracuj%C3%A1-Com-Laranja.jpg',
    title: 'Suco de Maracujá',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 2.5,
  },
  {
    id: 2,
    category: 'Drink',
    urlImage: 'https://miro.medium.com/max/1200/0*Uzt4O_O-wO_PutKH.jpg',
    title: 'Copo de Água',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 0,
  },
  {
    id: 3,
    category: 'Drink',
    urlImage:
      'https://images.tcdn.com.br/img/img_prod/705208/copo_cerveja_caldereta_350ml_37797293_1_20201123151545.jpg',
    title: 'Cerveja',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 3,
  },
  {
    id: 4,
    category: 'Drink',
    urlImage:
      'https://s2.glbimg.com/a3kQ_qIqjxZZj18gUo2_U05NiBY=/0x0:500x375/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/17/18/09/811/limonada_suica_10.jpg',
    title: 'Limonada',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
  },
  {
    id: 5,
    category: 'Drink',
    urlImage: 'https://saude.abril.com.br/wp-content/uploads/2017/07/iogurte-skyr.jpg',
    title: 'Iogurte',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
  },
];

export const RestaurantsCollection: iProducts[] = [
  {
    id: 0,
    category: 'Restaurant',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Lanche dos Amigos',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    id: 1,
    category: 'Restaurant',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Salgados Gourmet',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    id: 2,
    category: 'Restaurant',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Bota Dentro',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    id: 3,
    category: 'Restaurant',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Food Truck',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    id: 4,
    category: 'Restaurant',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Peixaria Keidiria',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    id: 5,
    category: 'Restaurant',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Churras K.O.',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
];

export const SnacksCollection: iProducts[] = [
  {
    id: 0,
    category: 'Snack',
    urlImage:
      'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/5eb99042-90e4-41e9-a472-2801ac1e08e8/5eb99042-c024-44c9-8414-2801ac1e08e8.jpg',
    title: 'X-Salada',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 5,
  },
  {
    id: 1,
    category: 'Snack',
    urlImage: 'https://paradisepizzaria.com.br/site/img/produtos/281485_1_g.png',
    title: 'Pizza de Catupiry',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
  },
  {
    id: 2,
    category: 'Snack',
    urlImage: 'https://nutrimassasesalgados.com/wp-content/uploads/2020/05/MG_6884-copiar.jpg',
    title: 'Pastel de Carne',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 6,
  },
  {
    id: 3,
    category: 'Snack',
    urlImage:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Salgado-Coxinha-PNG-1280x720.png',
    title: 'Coxinha',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 2.5,
  },
  {
    id: 4,
    category: 'Snack',
    urlImage: 'https://img.estadao.com.br/resources/jpg/2/1/1487193579312.jpg',
    title: 'Batata Frita',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
  },
  {
    id: 5,
    category: 'Snack',
    urlImage: 'https://www.receitasdecomida.com.br/wp-content/uploads/2013/01/empada-fina-1074.jpg',
    title: 'Empadão',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
  },
];
