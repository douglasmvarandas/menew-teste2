import { Grid } from '@mui/material'
import ProductCard from '../../components/ProductCard'
import { RestaurantsCollection } from '../../db'

export default function RestaurantPage() {
    return (
        <Grid container justifyContent="center">
            <Grid item container spacing={4} maxWidth={1200} justifyContent="center">
                {
                    RestaurantsCollection.map((restaurant) => (
                        <Grid item>
                            <ProductCard
                                key={restaurant.id}
                                id={restaurant.id}
                                title={restaurant.title}
                                urlImage={restaurant.urlImage}
                                category={restaurant.category}
                                description={restaurant.description}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}