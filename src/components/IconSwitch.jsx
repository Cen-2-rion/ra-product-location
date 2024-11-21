import PropTypes from 'prop-types';

const IconSwitch = ({icon, onSwitch}) => {
  
  return (
    <button className='material-icons' onClick={() => onSwitch(icon)}>
      {icon}
    </button>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
}

export default IconSwitch;
