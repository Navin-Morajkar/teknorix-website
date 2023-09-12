const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sankshe132002@gmail.com', 
        pass: 'VIRUS666', 
    },
});


app.post('/send-email', (req, res) => {
    const { name, email } = req.body; 

    const mailOptions = {
        from: 'sankshe2002@gmail.com',
        to: 'testteknorix@gmail.com', 
        subject: 'Contact Request',
        text: `Name: ${name}\nEmail: ${email}`, 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true, message: 'Email sent successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
