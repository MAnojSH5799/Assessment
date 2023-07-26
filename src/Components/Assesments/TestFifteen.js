import React, { useState } from 'react';
import "../../Css/style.css";
import Questions from '../Questions.json';
import TestFour from "./TestFour";
import TestSixteen from "./TestSixteen";
import LayOut from "./LayOut";
import TestFourteen from './TestFourteen';
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestFifteen = ({ allAnswer, view })=> {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestFifteenView, setTestFifteenView] = useState(view);

  const handleThreeAnswerClick = (e, a1, option) => {
    let newThreeQuestion = Question;
    newThreeQuestion.map((obj, index) => {
      if (obj.LevelNumber === option.LevelNumber && obj.QuestionNumber === option.QuestionNumber) {
        if (a1 === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });

    setQuestion(newThreeQuestion);

    const buttons = document.querySelectorAll('.buttonStyle');
    buttons.forEach((button) => {
      button.classList.remove('selected');      
    });
    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };

  const handleThreeSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "15" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newThreeQuestion = Question;
      const count = newThreeQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "15" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestFifteenView(16)
      }
      else {
         setTestFifteenView(14);
      }
      setQuestion(newThreeQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestFifteenView === 15) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Digit addition (100s added to 1-99)</span>
            </div>
            {Question.map((option, index) =>
              option.LevelNumber === "15" ? (
                <div className="qus" key={option.correctAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerThreeStyle}>
                    {option.options.map((a1, optionIndex) => (
                      <button
                      className="buttonStyle"
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
  else if (TestFifteenView === 16) {
    return <TestSixteen allAnswer={Question} view={16} />;
  } 
  else if (TestFifteenView === 14) {
    return <TestFourteen allAnswer={Question} view={14} />;
  } 
  else {
    return null;
  }
};

export default TestFifteen;