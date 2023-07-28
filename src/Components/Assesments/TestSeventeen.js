import React, { useState } from 'react';
import "../../Css/style.css";
import Questions from '../Questions.json';
import TestFour from "./TestFour";
import TestEighteen from "./TestEighteen";
import LayOut from "./LayOut";
import TestSixteen from './TestSixteen';
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestSeventeen = ({ allAnswer, view })=> {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestSeventeenView, setTestSeventeenView] = useState(view);

  const handleThreeAnswerClick = (e, a1, option) => {
    const newSeventeenQuestion = Question.map((obj) => {
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
    setQuestion(newSeventeenQuestion);
  };

  const handleThreeSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "17" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newSeventeenQuestion = Question;
      const count = newSeventeenQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "17" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestSeventeenView(18)
      }
      else {
         setTestSeventeenView(16);
      }
      setQuestion(newSeventeenQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestSeventeenView === 17) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Digit subtraction (1-99 subtracted from 100s)</span>
            </div>
            {Question.map((option, index) =>
              option.LevelNumber === "17" ? (
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
  } 
  else if (TestSeventeenView === 18) {
    return <TestEighteen allAnswer={Question} view={18} />;
  } 
  else if (TestSeventeenView === 16) {
    return <TestSixteen allAnswer={Question} view={16} />;
  } 
  else {
    return null;
  }
};

export default TestSeventeen;