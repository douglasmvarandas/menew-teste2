import { Grid } from '@mui/material'
import ProductCard from '../../components/ProductCard'
import { SnacksCollection } from '../../db'

export default function SnackPage() {
    return (
        <Grid container justifyContent="center">
            <Grid item container spacing={4} maxWidth={1200} justifyContent="center">
                {
                    SnacksCollection.map((snack) => (
                        <Grid item>
                            <ProductCard
                                key={snack.id}
                                id={snack.id}
                                title={snack.title}
                                urlImage={snack.urlImage}
                                category={snack.category}
                                description={snack.description}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}