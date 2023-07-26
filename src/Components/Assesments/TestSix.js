import React, { useState } from 'react';
import "../../Css/style.css";
import Questions from '../Questions.json';
import TestFive from "./TestFive";
import TestSeven from "./TestSeven";
import LayOut from "./LayOut";
const containerThreeStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};

const TestSix = ({ allAnswer, view })=> {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestSixView, setTestSixView] = useState(view);

  const handleSixAnswerClick = (e, a1, option) => {
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
      button.style.outline = 'none';
    });
    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };

  const handleThreeSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "6" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newThreeQuestion = Question;
      const count = newThreeQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "6" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestSixView(7)
      }
      else {
         setTestSixView(5);
      }
      setQuestion(newThreeQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestSixView === 6) {
    return (
      <>
       <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : What come before</span>
            </div>
            {Question.map((option, index) =>
              option.LevelNumber === "6" ? (
                <div className="qus" key={option.correctAnswer}>
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerThreeStyle}>
                    {option.options.map((a1, optionIndex) => (
                      <button
                      className="buttonStyle"
                        onClick={(e) => handleSixAnswerClick(e, a1, option)}
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
  } else if (TestSixView === 7) {
    return <TestSeven allAnswer={Question} view={7} />;
  } 
  else if (TestSixView === 5) {
    return <TestFive allAnswer={Question} view={5} />;
  } 
  else {
    return null;
  }
};

export default TestSix;