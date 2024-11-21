import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

const CardsView = ({cards}) => {
    
    return (
        <div className='cards-view'>
            {cards.map(card => (
                <ShopCard key={card} card={card}/>
            ))}
        </div>
    );
}

CardsView.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
}

export default CardsView;
