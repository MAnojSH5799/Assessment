import React, { useState } from 'react';
import "../../Css/style.css";
import Questions from '../Questions.json';
import TestFour from "./TestFour";
import TestFifteen from "./TestFifteen";
import LayOut from "./LayOut";
import TestThirteen from './TestThirteen';
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestFourteen = ({ allAnswer, view })=> {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestFourteenView, setTestFourteenView] = useState(view);

  const handleThreeAnswerClick = (e, a1, option) => {
    const newFourteenQuestion = Question.map((obj) => {
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
    setQuestion(newFourteenQuestion);
  };

  const handleThreeSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "14" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newFourteenQuestion = Question;
      const count = newFourteenQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "14" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestFourteenView(15)
      }
      else {
         setTestFourteenView(13);
      }
      setQuestion(newFourteenQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestFourteenView === 14) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Double - Single Digit Division (with remainder) (V)</span>
            </div>
            {Question.map((option, index) =>
              option.LevelNumber === "14" ? (
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
  else if (TestFourteenView === 15) {
    return <TestFifteen allAnswer={Question} view={15} />;
  } 
  else if (TestFourteenView === 13) {
    return <TestThirteen allAnswer={Question} view={13} />;
  } 
  else {
    return null;
  }
};

export default TestFourteen;