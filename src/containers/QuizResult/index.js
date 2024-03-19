import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import './style.scss';
// import emailjs from '@emailjs/browser';
// import { SMTPClient } from 'emailjs';
// import nodemailer from 'nodemailer';
// const client = new SMTPClient({
// 	user: 'test@effortcamerounais.com',
// 	password: 'wP5@1Pp4dfmnXn8',// wP5@1Pp4dfmnXn8
// 	host: 'mail.effortcamerounais.com',//mail.effortcamerounais.com
// 	ssl: true,
// });

export default function QuizResult() {
  const results = useStore((state) => state.results);

  const quizResult = React.useMemo(() => {
    let result = false;

    for (const questionIdx in results) {
      if (typeof results[questionIdx] === 'boolean') {
        result = result || results[questionIdx];
      }
    }

    return result;
  }, [results]);

  // const transporter = nodemailer.createTransport({
  //   host: 'mail.effortcamerounais.com',
  //   port: 587,
  //   secure: true,
  //   auth: {
  //     user: 'test@effortcamerounais.com',
  //     pass: 'wP5@1Pp4dfmnXn8',
  //   },
  // });
  const options = {
    from: 'test@effortcamerounais.com',
    to: 'marcsitze01@gmail.com',
    subject: 'hello world',
    html: 'i hope this works',
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_rk1jqrt', 'template_hfp2t2g', "test email")
    //     .then((result) => {
    //         console.log(result.text);
    //         console.log("message sent!")
    //     }, (error) => {
    //         console.log(error.text);
    //         console.log("error sending message, try again!")
    //     });
    // client.send(
    //   {
    //     text: 'i hope this works',
    //     from: 'test@effortcamerounais.com',
    //     to: 'marcsitze01@gmail.com',
    //     cc: 'else <else@your-email.com>',
    //     subject: 'testing emailjs',
    //   },
    //   (err, message) => {
    //     console.log(err || message);
    //   }
    // );
    console.log("clicked...")
    // const response = await transporter.sendMail(options);
    // console.log("response: ", response)
    };

  // console.log('results: ', results);
  return (
    <>
      <Link to="/" className="back__link">
        Back
      </Link>

      <h1 className="quiz__result-message">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ marginBottom: 20 }}>
            Great news! We have the perfect match for you. just enter your email
            to receive your results
          </span>
          <div style={{ display: "flex"}}>
            <input
              style={{
                width: 300,
                height: 54,
                border: '1px solid rgb(200, 200, 200)',
                fontSize: 22,
                padding: '10px 20px',
                outline: 'none',
              }}
              placeholder="example@gmail.com"
              type="email"
              name="email"
            />
            <button onClick={sendEmail}>Submit</button>
          </div>
        </div>
      </h1>
    </>
  );
}
