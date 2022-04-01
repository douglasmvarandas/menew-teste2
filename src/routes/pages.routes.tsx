function HelloWorld() {
  return <div>Hello World</div>;
}

const APP_ROUTES = [
  {
    label: 'Bebidas',
    path: '/',
    component: <HelloWorld />,
  },
  {
    label: 'Lanches',
    path: 'snacks',
    component: <HelloWorld />,
  },
  {
    label: 'Restaurantes',
    path: 'restaurants',
    component: <HelloWorld />,
  },
];

export default APP_ROUTES