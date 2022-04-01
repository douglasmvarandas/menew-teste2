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

interface iProducts {
  category: string;
  urlImage: string;
  title: string;
  description: string;
  price?: number;
}

export const DrinksCollection: iProducts[] = [
  {
    category: 'Drink',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Coca-Cola Zero',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 4,
  },
  {
    category: 'Drink',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Suco de Maracujá',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 2.5,
  },
  {
    category: 'Drink',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Copo de Água',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 0,
  },
  {
    category: 'Drink',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Cerveja',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 3,
  },
  {
    category: 'Drink',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Batata Frita',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
  },
];

export const RestaurantsCollection: iProducts[] = [
  {
    category: 'Restaurant',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Lanche dos Amigos',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    category: 'Restaurant',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Salgados Gourmet',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    category: 'Restaurant',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Bota Dentro',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    category: 'Restaurant',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Food Truck',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
  {
    category: 'Restaurant',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Peixaria Keidiria',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  },
];

export const SnacksCollection: iProducts[] = [
  {
    category: 'Snack',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'X-Salada',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 5,
  },
  {
    category: 'Snack',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Pizza de Catupiry',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
  },
  {
    category: 'Snack',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Pastel de Carne',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 6,
  },
  {
    category: 'Snack',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Coxinha',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 2.5,
  },
  {
    category: 'Snack',
    urlImage: 'https://github.com/rickson-lima.git',
    title: 'Batata Frita',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
  },
];
