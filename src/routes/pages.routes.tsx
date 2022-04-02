import DrinksPage from '../pages/Drinks'
import RestaurantsPage from '../pages/Restaurants'
import SnacksPage from '../pages/Snacks'

const APP_ROUTES = [
  {
    label: 'Bebidas',
    path: '/',
    component: <DrinksPage />,
  },
  {
    label: 'Lanches',
    path: 'snacks',
    component: <SnacksPage />,
  },
  {
    label: 'Restaurantes',
    path: 'restaurants',
    component: <RestaurantsPage />,
  },
];

export default APP_ROUTES