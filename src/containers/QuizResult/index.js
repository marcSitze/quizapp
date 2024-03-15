import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import './style.scss';

export default function QuizResult() {
  const results = useStore((state) => state.results);

  const quizResult = React.useMemo(() => {
    let result = false;

    for (const questionIdx in results) {
      if (typeof results[questionIdx] === 'boolean') {
        result = result || results[questionIdx];
      }
    }
    //697189997 // Valeri
    return result;
  }, [results]);

  console.log('results: ', results);
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
            <button>Submit</button>
          </div>
        </div>
      </h1>
    </>
  );
}
