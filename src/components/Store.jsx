import {useState} from 'react';
import products from './Products';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const Store = () => {
    const [icon, setIcon] = useState('view_list');

    const toggleIcon = () => {
        setIcon((icon === 'view_list') ? 'view_module' : 'view_list');
    }
    
    const cardsView = <CardsView cards={products}/>;
    const listView = <ListView items={products}/>;
    
    return (
        <div className="store">
            <div className='icon'>
                <IconSwitch icon={icon} onSwitch={toggleIcon}/>
            </div>
            <div className="container">
                {(icon === 'view_list') ? cardsView : listView}
            </div>
        </div>
    );
}

export default Store;
