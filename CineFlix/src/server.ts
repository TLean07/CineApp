const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5173;

app.use(bodyParser.json());
app.use(cors());

app.post('/contato', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'coinbank2024@gmail.com',
            pass: 'LeanPh07',
        }
    });
    

    const mailOptions = {
        from: email,
        to: 'coinbank2024@gmail.com',
        subject: `Mensagem de ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar o email:', error);
        res.status(500).send('Erro ao enviar o email: ' + error.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
