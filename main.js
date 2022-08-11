var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'yourmail@outlook.com',
    pass: 'pass'
  }
});

var mailOptions = {
  from: 'youremail@outlook.com',
  to: 'destination@gmail.com',
  subject: 'Sending Email using Node.js',
  html: "<h1 style='color:red; text-align:center;'>Welcome</h1><p>Test!</p>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
