import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import './style.scss';
import emailjs from '@emailjs/browser';
import { saveEmail } from '../../services/email';
import getResult from '../../utils/getResult';
import getKeyWithHighestValue from '../../utils/getKeyWithHighestValue';
import Spinner from '../../assets/images/spinner.gif';
import Popup from '../../components/Popup';

export default function QuizResult() {
  const results = useStore((state) => state.results);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [isSend, setIsSend] = useState(false);

  const quizResult = React.useMemo(() => {
    let result = false;

    for (const questionIdx in results) {
      if (typeof results[questionIdx] === 'boolean') {
        result = result || results[questionIdx];
      }
    }

    return result;
  }, [results]);

  // toast.success('Email with your responses sent!');

  useEffect(() => {
    console.log('tosend: ', getResult(getKeyWithHighestValue(results)));
    console.log('tosend2: ', getKeyWithHighestValue(results));
    console.log('tosend3: ', results);
  }, []);
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      to_name: `${values.firstName} ${values.lastName}`,
      to_email: values.email,
      from_name: 'Rigoscore',
      message: `Voici votre resultat: ${getResult(
        getKeyWithHighestValue(results),
      )}`,
    };

    if (values.email) {
      emailjs
        .send(
          'service_8atuzzc',
          'template_hfp2t2g',
          templateParams,
          'WRPNTni4bSD_a6FeM',
        )
        .then(
          (result) => {
            // console.log(result.text);
            // console.log('message sent!');
            saveEmail(values.email);
            setIsSend(true);
            setValues({
              firstName: '',
              lastName: '',
              email: '',
            });
            setLoading(false);
            setIsOpen(true);
          },
          (error) => {
            // console.log(error.text);
            // console.log('error sending message, try again!');
            setIsSend(false);
            setLoading(false);
          },
        );
    }
    console.log('clicked...');
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <>
      <Link to="/" className="back__link">
        Home
      </Link>

      <h1 className="quiz__result-message">
        <div
          style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}
        >
          <span style={{ marginBottom: 20, marginTop: 40 }}>
            Great news! We have the perfect match for you. just enter your email
            to receive your results
          </span>
          {/* <div
            style={{
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '50%',
                // backgroundColor: 'lightgreen',

                justifyContent: 'center',
                flexDirection: 'column',
                margin: '0 auto',
                padding: 10,
                fontSize: 16,
              }}
            >
              <p style={{ margin: 0, padding: '20px 0 0 10px', lineHeight: 0 }}>
                Email Sent Successfully
              </p>
              <p style={{ margin: 0, padding: 0, paddingLeft: '10px' }}>
                check your mail to view your results
              </p>
            </div>
          </div> */}
        </div>
      </h1>

      <div class="contact-form">
        <h2>Obtenir Vos resultats</h2>
        <form action="#" method="post">
          <div class="form-group">
            <label for="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <button
              type="submit"
              // value="Submit"
              style={{ backgroundColor: loading ? 'lightgray' : '#0080c4' }}
              onClick={sendEmail}
              disabled={loading || values.email.length < 5}
            >
              {loading ? (
                <img src={Spinner} width={25} height={25} alt="spinner" />
              ) : (
                'Submit'
              )}
            </button>
          </div>
          {isSend && <Popup onClose={(data) => setIsOpen(!data)} />}
        </form>
      </div>
    </>
  );
}
