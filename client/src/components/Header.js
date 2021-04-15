import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'


const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()
    return (
        <header className='header'>
           <h1>{title}</h1> 
           {location.pathname === '/' && (<Button 
           color = {showAdd ? 'red' : 'black'}
           onClick={onAdd}
           text={showAdd ? 'Close' : 'Add'}/>)}
         </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
