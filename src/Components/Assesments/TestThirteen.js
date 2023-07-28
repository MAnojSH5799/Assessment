import React, { useState } from 'react';
import "../../Css/style.css";
import Questions from '../Questions.json';
import TestFour from "./TestFour";
import TestFourteen from "./TestFourteen";
import LayOut from "./LayOut";
import TestTewlve from './TestTwelve';
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestThirteen = ({ allAnswer, view })=> {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestThirteenView, setTestThirteenView] = useState(view);

  const handleThirteenAnswerClick = (e, a1, option) => {
    const newThirteenQuestion = Question.map((obj) => {
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
    setQuestion(newThirteenQuestion);
  };

  const handleThirteenSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "13" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newThirteenQuestion = Question;
      const count = newThirteenQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "13" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestThirteenView(14)
      }
      else {
         setTestThirteenView(12);
      }
      setQuestion(newThirteenQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestThirteenView === 13) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Double - Single Digit Division (w/o remainder)(H)</span>
            </div>
            {Question.map((option, index) =>
              option.LevelNumber === "13" ? (
                <div className="qus" key={option.correctAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerThreeStyle}>
                    {option.options.map((a1, optionIndex) => (
                      <button
                      className={`buttonStyle ${
                        option.status1[optionIndex] === 1 ? "selected" : ""
                      }`}
                        onClick={(e) => handleThirteenAnswerClick(e, a1, option)}
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
              <button className="Assessment-btn mb-5" onClick={handleThirteenSubmit}>
                Submit
              </button>
            </div>
          </div>
      </>
    );
  } 
  else if (TestThirteenView === 14) {
    return <TestFourteen allAnswer={Question} view={14} />;
  } 
  else if (TestThirteenView === 12) {
    return <TestTewlve allAnswer={Question} View={12} />;
  } 
  else {
    return null;
  }
};

export default TestThirteen;