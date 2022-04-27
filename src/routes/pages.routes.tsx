import { ListItemsPage } from '../pages/Home'

const APP_ROUTES = [
  {
    label: 'Bebidas',
    path: '/',
    component: <ListItemsPage category="drinks" />,
  },
  {
    label: 'Lanches',
    path: 'snacks',
    component: <ListItemsPage category="snacks" />,
  },
  {
    label: 'Restaurantes',
    path: 'restaurants',
    component: <ListItemsPage category="restaurants" />,
  },
];

export default APP_ROUTES