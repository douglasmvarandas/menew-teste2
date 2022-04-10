import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { iProducts } from '../../db';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useState } from 'react';
import UpdateProductModal from '../Modals/updateProduct.modal';
import { deleteItem } from '../../reducers/slices/product.slice';

function ProductCard({ id, title, description, urlImage, category }: iProducts) {
    const { isLogged } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const [openUpdateModal, setUpdateModal] = useState(false)

    const toggleUpdateModal = () => setUpdateModal(!openUpdateModal)

    const handleDeleteItem = () => {
        dispatch(deleteItem({ id, title, description, urlImage, category }))
    }

    return (
        <>
            <UpdateProductModal
                open={openUpdateModal}
                toggle={toggleUpdateModal}
                productData={{ id, title, description, urlImage, category }}
            />
            <Card sx={{ maxWidth: 325, marginTop: 4 }}>
                <CardMedia
                    component="img"
                    image={urlImage}
                    alt={title}
                    height="140"
                    sx={{ objectFit: 'contain', paddingTop: 1 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text">
                        {description}
                    </Typography>
                </CardContent>
                {
                    isLogged && (
                        <CardActions>
                            <Button
                                size="small"
                                onClick={handleDeleteItem}
                                endIcon={<DeleteIcon />}
                            >
                                Deletar
                            </Button>
                            <Button
                                size="small"
                                onClick={toggleUpdateModal}
                                endIcon={<EditIcon />}
                            >
                                Editar
                            </Button>
                        </CardActions>
                    )
                }
            </Card>

        </>
    );
}

export default memo(ProductCard)