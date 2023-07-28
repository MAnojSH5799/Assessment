import React, { useState } from 'react';
import "../../Css/style.css";
import Questions from '../Questions.json';
import TestFour from "./TestFour";
import TestNine from "./TestNine"
import LayOut from "./LayOut";
import TestSeven from './TestSeven';
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestEight = ({ allAnswer, view })=> {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestEightView, setTestEightView] = useState(view);

  const handleEightAnswerClick = (e, a1, option) => {
    const newEightQuestion = Question.map((obj) => {
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
    setQuestion(newEightQuestion);
  };

  const handleThreeSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "8" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newEightQuestion = Question;
      const count = newEightQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "8" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestEightView(9)
      }
      else {
         setTestEightView(7);
      }
      setQuestion(newEightQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestEightView === 8) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Add or Subtract</span>
            </div>
            {Question.map((option, index) =>
              option.LevelNumber === "8" ? (
                <div className="qus" key={option.correctAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerThreeStyle}>
                    {option.options.map((a1, optionIndex) => (
                      <button
                      className={`buttonStyle ${
                        option.status1[optionIndex] === 1 ? "selected" : ""
                      }`}
                        onClick={(e) => handleEightAnswerClick(e, a1, option)}
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
  } else if (TestEightView === 9) {
    return <TestNine allAnswer={Question} view={9} />;
  } 
  else if (TestEightView === 7) {
    return <TestSeven allAnswer={Question} view={7} />;
  } 
  else {
    return null;
  }
};

export default TestEight;