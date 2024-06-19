import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="flex space-x-6">
                <li>
                    <NavLink to="/" className="hover:text-gray-300 transition-colors duration-200">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/filmes" className="hover:text-gray-300 transition-colors duration-200">Filmes</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre" className="hover:text-gray-300 transition-colors duration-200">Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/contato" className="hover:text-gray-300 transition-colors duration-200">Contato</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
