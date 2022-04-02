import { Grid } from '@mui/material'
import ProductCard from '../../components/ProductCard'
import { DrinksCollection } from '../../db'

export default function DrinksPage() {
    return (
        <Grid container justifyContent="center">
            <Grid item container spacing={4} maxWidth={1200} justifyContent="center">
                {
                    DrinksCollection.map((drink) => (
                        <Grid item>
                            <ProductCard
                                key={drink.id}
                                id={drink.id}
                                title={drink.title}
                                urlImage={drink.urlImage}
                                category={drink.category}
                                description={drink.description}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}