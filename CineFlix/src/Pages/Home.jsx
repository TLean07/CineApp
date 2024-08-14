import { useEffect, useState } from 'react';
import data from '../../artigos.json';

function Home() {
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setArticles(data);
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <main className="bg-gray-900 min-h-screen p-10 pt-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Descubra nossos filmes</h2>
                <input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full p-2 mb-6 rounded bg-gray-800 border border-gray-600 text-white"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                        <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img className="w-full h-72 object-cover" src={article.image} alt={article.title} />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                                <p className="text-gray-400 mb-2">{article.description}</p>
                                <div className="flex space-x-2">
                                    {article.tags.map((tag, index) => (
                                        <span key={index} className="bg-pink-800 text-white px-2 py-1 rounded-full text-xs">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex items-center mt-4">
                                    <span className="text-yellow-400">{'\u2605'}</span> {}
                                    <p className="text-white ml-1">{article.rating}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;
