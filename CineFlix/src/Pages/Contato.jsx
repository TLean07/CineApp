import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // Estado para armazenar a mensagem de status

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            setStatus("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        };

        emailjs.send("service_hv6xr4f", "template_fkhbt58", templateParams, "k4ojgcU3PINIi8Prq")
        .then((response) => {
            setStatus("Email enviado com sucesso.", response);
            setName('');
            setEmail('');
            setMessage('');
        }, (err) => {
            setStatus("Erro ao enviar o email. Tente novamente.", err);
        });
    }

    return (
        <div className="bg-gray-900 min-h-screen p-10 pt-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Fale Conosco</h2>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                    <form className="space-y-4" onSubmit={sendEmail}>
                        <div>
                            <label htmlFor="name" className="block text-gray-400">Nome</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-400">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                placeholder="Seu email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-400">Mensagem</label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                placeholder="Sua mensagem"
                            ></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                                Enviar
                            </button>
                        </div>
                        {status && <p className="text-white mt-4">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contato;
