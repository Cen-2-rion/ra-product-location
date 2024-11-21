const ShopItem = (items) => {
    const {img, name, color, price} = items.item;
    
    return (
        <div className='item'>
            <img className='item-image' src={img} alt={`${name}${color}`}/>
            <h2 className='item-name'>{name}</h2>
            <div className='item-color'>{color}</div>
            <span className='item-price'>${price}</span>
            <button className='item-button'>Add to cart</button>
        </div>
    );
}

export default ShopItem;
