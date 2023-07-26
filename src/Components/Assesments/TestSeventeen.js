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
      if (option.LevelNumber === "17" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newThreeQuestion = Question;
      const count = newThreeQuestion.reduce((count, Question) => {
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
      setQuestion(newThreeQuestion);
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