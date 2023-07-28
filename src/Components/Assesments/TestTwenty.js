import React, { useState } from 'react';
import "../../Css/style.css";
import LayOut from "./LayOut";
import Scoreboard from '../Scoreboard';
import TestNineteen from './TestNineteen';
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestTwenty = ({ allAnswer, view })=> {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestTwentyView, setTestTwentyView] = useState(view);

  const handleThreeAnswerClick = (e, a1, option) => {
    const newTwentyQuestion = Question.map((obj) => {
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
    setQuestion(newTwentyQuestion);
  };

  const handleThreeSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "20" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newTwentyQuestion = Question;
      const count = newTwentyQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "20" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        alert("Congraulations All Level Passed")
        setTestTwentyView(21)
      }
      else {
         setTestTwentyView(19);
      }
      setQuestion(newTwentyQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestTwentyView === 20) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Triple-Double Digit Division (V)</span>
            </div>
            {Question.map((option, index) =>
              option.LevelNumber === "20" ? (
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
  else if (TestTwentyView === 21) {
    return <Scoreboard allAnswer={Question} view={21} />;
  } 
  else if (TestTwentyView === 19) {
    return <TestNineteen allAnswer={Question} view={19} />;
  } 
  else {
    return null;
  }
};

export default TestTwenty;