// Componentes/Footer.jsx

function Footer() {
    return (
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/3/3b/Cineflix.png"
              alt="Cineflix Logo"
              className="w-25 h-10"
            />
            <span className="text-lg font-bold">CineFlix</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/filmes" className="hover:text-gray-400 transition-colors duration-200">
                  Filmes
                </a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-gray-400 transition-colors duration-200">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-gray-400 transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 border-t border-gray-600 pt-4 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CineFlix. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  