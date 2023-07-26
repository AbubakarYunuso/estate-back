const nodemailer = require('nodemailer')

module.exports.submitMailController = {
    submit: async (req, res) => {
        const { name, email, number } = req.body;
      
        try {
          // Создание транспортера для отправки почты
          const transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'sayt.zastroyshchika@mail.ru',
                pass: 'QmL6hfumNpWhXtvBZDCu',//пароль от почты: Khamzz9595
            },
            tls: {
                rejectUnauthorized: false,
            },
        });;
    
    
      
          // Определение параметров письма
          const mailOptions = {
            from: 'sayt.zastroyshchika@mail.ru',
            to: 'sayt.zastroyshchika@mail.ru',
            subject: 'New Message from Contact Form',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${number}`,
          };
      
          // Отправка письма
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent:', info.response);
      
          res.sendStatus(200);
        } catch (error) {
          console.error('Error:', error);
          res.sendStatus(500);
        }
      }
}