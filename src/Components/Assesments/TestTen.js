import React, { useState } from 'react';
import "../../Css/style.css";
import Questions from '../Questions.json';
import TestFour from "./TestFour";
import TestEleven from "./TestEleven";
import LayOut from "./LayOut";
import TestNine from './TestNine';
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestTen = ({ allAnswer, view })=> {
  const [Question, setQuestion] = useState(Questions);
  const [TestTenView, setTestTenView] = useState(view);

  const handleThreeAnswerClick = (e, a1, option) => {
    const newTenQuestion = Question.map((obj) => {
      if (
        obj.LevelNumber === option.LevelNumber &&
        obj.QuestionNumber === option.QuestionNumber
      ) {
        const updatedOptions = obj.options.map((optionValue) =>
          optionValue === a1 ? 1 : 0
        );
        const status = a1 === option.CorrectAnswer ? 1 : 0;
        return {
          ...obj,
          status: status,
          status1:updatedOptions,
        };
        
      }
      return obj;
      
    });
    setQuestion(newTenQuestion);
  };

  const handleThreeSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "10" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newTenQuestion = Question;
      const count = newTenQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "10" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestTenView(11)
      }
      else {
         setTestTenView(9);
      }
      setQuestion(newTenQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestTenView === 10) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Expanded form (3 digit)</span>
            </div>
            {Question.map((option, index) =>
              option.LevelNumber === "10" ? (
                <div className="qus" key={option.correctAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerThreeStyle}>
                    {option.options.map((a1, optionIndex) => (
                      <button
                      className={`buttonStyle ${
                        option.status1[optionIndex] === 1 ? "selected" : ""
                      }`}
                        onClick={(e) => handleThreeAnswerClick(e, a1, option)}
                        key={a1}
                      >
                        {a1}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null
            )}
            <div className="sub-btn">
              <button className="Assessment-btn mb-5" onClick={handleThreeSubmit}>
                Submit
              </button>
            </div>
          </div>
      </>
    );
  } else if (TestTenView === 11) {
    return <TestEleven allAnswer={Question} view={11} />;
  } 
  else if (TestTenView === 9) {
    return <TestNine allAnswer={Question} view={9} />;
  } 
  else {
    return null;
  }
};

export default TestTen;