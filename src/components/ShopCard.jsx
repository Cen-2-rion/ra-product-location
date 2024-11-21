const ShopCard = (cards) => {
    const {name, color, img, price} = cards.card;
    
    return (
        <div className='card'>
            <h2 className='card-name'>{name}</h2>
            <div className='card-color'>{color}</div>
            <img className='card-image' src={img} alt={`${name}${color}`}/>
            <div className='card-footer'>
                <span className='card-price'>${price}</span>
                <button className='card-button'>Add to cart</button>
            </div>
        </div>
    );
}

export default ShopCard;
