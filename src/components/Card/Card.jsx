import { Button, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomCard = ({title, description, image, editButton, id}) => {

    const navigate = useNavigate()

    return (
        <Card sx={{ width: '100%' }} >
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {editButton && <Button size="small" onClick={() => {navigate(`/editar/${id}`)}}>Editar</Button>}
            </CardActions>
        </Card>
    )
}

// CustomCard.propTypes = {
//     title: PropTypes.string.isRequired(), 
//     description: PropTypes.string.isRequired(), 
//     image: PropTypes.string.isRequired(), 
//     editButton: PropTypes.bool
// }

export {CustomCard};