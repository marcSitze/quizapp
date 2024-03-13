import React from 'react';
import ChoiceOption from '../ChoiceOption';
import { useQuestionStore, useStore } from '../../store';
import './style.scss';
import json from '../../json/quiz.json';
export default function Question({ question, optionType, options }) {
  const choose = useQuestionStore((state) => state.choose);
  const currentIndex = useStore((state) => state.currentIndex);

  React.useEffect(() => {
    choose(null);
  }, [choose, question]);

  return (
    <section className="question__section">
      <h1 className="question__title">
        {question} {`(${currentIndex + 1}/${json.questions.length})`}
      </h1>
      <div className="question__list">
        {options
          ? options.map((option) => {
              const key = Object.keys(option)[0];
              const value = option[key];
              return (
                <ChoiceOption
                  key={value}
                  title={key}
                  value={value}
                  type={optionType}
                />
              );
            })
          : null}
      </div>
    </section>
  );
}
