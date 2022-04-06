import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

let style = {
    
    color: '#fff',
    fontWeight: '600',
    marginLeft: '10px',
    textTransform: 'uppercase',
    textDecoration: 'none'
}

const CustomLink = ({name, route}) => {

    return (
        <Link to={route} style={style}>{name}</Link>
    )
}

// CustomLink.propTypes = {
//     name: PropTypes.string.isRequired().message('Necesário um nome para o link'),
//     route: PropTypes.string.isRequired()
// }

export { CustomLink };