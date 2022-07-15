import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import Title from '../Title/Title'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <Link to='/'>
                <Title />
            </Link>
                <NavLink to="/category/cuadros" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cuadros</NavLink>
                <NavLink to="/category/platos-palancas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Platos y palancas</NavLink>
                <NavLink to="/category/frenos-shifters" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Frenos y shifters</NavLink>
                <NavLink to="/category/cubiertas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cubiertas</NavLink>
                <NavLink to="/category/horquillas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Horquillas</NavLink>
                <NavLink to="/category/stems" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Stems</NavLink>
                <CartWidget />
        </nav>
    )
}

export default NavBar