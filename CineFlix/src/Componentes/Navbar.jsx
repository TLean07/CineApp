import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="flex space-x-6">
                <li>
                    <Link to="/" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
                </li>
                <li>
                    <Link to="/filmes" className="hover:text-gray-300 transition-colors duration-200">Filmes</Link>
                </li>
                <li>
                    <Link to="/sobre" className="hover:text-gray-300 transition-colors duration-200">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato" className="hover:text-gray-300 transition-colors duration-200">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
