function Sobre() {
    return (
        <div className="bg-gray-900 min-h-screen p-10 pt-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Sobre CineFlix</h2>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img 
                            src="https://play-lh.googleusercontent.com/WfwkqIpdZz3ABcDVYWY0VPh1YYHGVeezWAEXoQgO-BRRXd7lgu8OwvCwHCAaZnWcFA" 
                            alt="Sobre CineFlix" 
                            className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-6 object-cover"
                        />
                        <div>
                            <p className="text-gray-400 mb-4">
                                CineFlix é o seu destino para descobrir e assistir filmes incríveis. Nossa missão é fornecer uma plataforma onde você pode explorar uma vasta coleção de filmes de diferentes gêneros e épocas. Com uma interface amigável e uma experiência de usuário intuitiva, CineFlix torna a busca pelo próximo filme para assistir uma experiência agradável.
                            </p>
                            <p className="text-gray-400 mb-4">
                                Navegue por nossas seleções populares, descubra novos lançamentos e encontre filmes clássicos que você adora. Nossa equipe está sempre trabalhando para trazer as melhores recomendações e manter nosso catálogo atualizado com os últimos lançamentos.
                            </p>
                            <p className="text-gray-400">
                                Junte-se a nós e mergulhe no mundo do cinema com CineFlix!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
