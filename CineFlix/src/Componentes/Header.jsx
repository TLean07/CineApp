import Navbar from './Navbar';

function Header() {
    return (
        <header className="bg-black text-white p-4 fixed w-full z-10 top-0 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src="https://play-lh.googleusercontent.com/WfwkqIpdZz3ABcDVYWY0VPh1YYHGVeezWAEXoQgO-BRRXd7lgu8OwvCwHCAaZnWcFA" alt="Logo" className="h-10"/>
                    <h1 className="text-xl font-bold">CineFlix</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="hidden md:inline">Olá, visitante!</span>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;
