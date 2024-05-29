import Navbar from "./Navbar";

function Header() {
    return ( 
        <header className="flex bg-teal-500 text-black p-4 mb-4 justify-between">
            <span>Olá, visitante</span>
            <h1>Bem-vindo ao CineFlix </h1>
            <Navbar/>
        </header>
     );
}

export default Header;
