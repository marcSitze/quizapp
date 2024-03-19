import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import './style.scss';
import emailjs from '@emailjs/browser';

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

  const options = {
    from: 'test@effortcamerounais.com',
    to: 'marcsitze01@gmail.com',
    subject: 'hello world',
    html: 'i hope this works',
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: 'James',
      from_name: 'Marc',
      message: "My test message email"
  };
    emailjs.send('service_8atuzzc', 'template_hfp2t2g', templateParams, "WRPNTni4bSD_a6FeM")
        .then((result) => {
            console.log(result.text);
            console.log("message sent!")
        }, (error) => {
            console.log(error.text);
            console.log("error sending message, try again!")
        });

    console.log("clicked...")
    };

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
