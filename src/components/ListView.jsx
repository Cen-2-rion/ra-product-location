import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

const ListView = ({items}) => {
    
    return (
        <div className='list-view'>
            {items.map((item) => (
                <ShopItem key={item} item={item}/>
            ))}
        </div>
    );
}

ListView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
}

export default ListView;
