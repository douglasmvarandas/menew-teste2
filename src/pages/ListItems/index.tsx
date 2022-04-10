import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import ProductCard from '../../components/ProductCard'

import { iProducts } from '../../db'
import { iReducerStore } from '../../reducers/store.reducer'

interface PageProps {
    category: string
}

export function ListItemsPage({ category }: PageProps) {
    const { drinks, restaurants, snacks } = useSelector((state: iReducerStore) => state.products)
    const [data, setData] = useState<iProducts[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!drinks || !snacks) return

        setIsLoading(true)

        let categoryProducts: iProducts[]

        if (category === 'drinks') categoryProducts = drinks
        else if (category === 'restaurants') categoryProducts = restaurants
        else categoryProducts = snacks

        // timeout to simulate a loading
        setTimeout(() => {
            setData(categoryProducts)
            setIsLoading(false)
        }, 500)
    }, [category, drinks, restaurants, snacks])

    return (
        <Grid container justifyContent="center">
            <Grid
                item
                container
                spacing={4}
                maxWidth={1200}
                justifyContent="center"
            >
                {
                    !isLoading ? (
                        data.map((item: iProducts) => (
                            <Grid item>
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    urlImage={item.urlImage}
                                    category={item.category}
                                    description={item.description}
                                />
                            </Grid>
                        ))
                    ) : (
                        <Grid
                            item
                            container
                            alignContent="center"
                            justifyContent="center"
                            height={500}
                        >
                            <CircularProgress />
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}