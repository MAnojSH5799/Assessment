import { Input } from "@mui/material";
import React, { useState } from 'react';
import "../../Css/style.css";
import Scoreboard from "../Scoreboard/index";
import TestTen from "./TestTen";
import LayOut from "./LayOut";
import Questions from '../Questions.json';
import TestEight from "./TestEight";

const containerFourStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};
const TestNine = ({ allAnswer, view }) => {
  const [Question, setQuestion] = useState(allAnswer);
  const [testNineView, setTestNineViewView] = useState(view);

  const handleNineAnswerChange = (e, option) => {
    let newNineQuestion = [...Questions];
    newNineQuestion.forEach((obj) => {
      if (obj.LevelNumber === option.LevelNumber && obj.QuestionNumber === option.QuestionNumber) {
        if (e.target.value === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newNineQuestion);
    const buttons = document.querySelectorAll('.buttonStyle');
    buttons.forEach((button) => {
      button.classList.remove('selected');      
    });
    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };

  const handleFourSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "9" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newNineQuestion = Question;
      const count = newNineQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "9" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestNineViewView(10)
      }
      else {
         setTestNineViewView(8)
      }
      setQuestion(newNineQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (testNineView === 9) {
    return (
      <>
          <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Multiplication Facts (6-10) (H)</span>
            </div>
            {Questions.map((option, index) =>

              option.LevelNumber === "9" ? (
                <div className="qus" >
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerFourStyle}>
                    <Input
                      variant="outlined"
                      onChange={(e) => handleNineAnswerChange(e, option)}
                      style={{ margin: "0.5rem" }}
                    />
                  </div>
                </div>
              ) : null
            )}
            <div className="sub-btn">
              <button className="Assessment-btn mb-5" onClick={handleFourSubmit}>
                Submit
              </button>
            </div>
          </div>
      </>
    );
  } else if (testNineView === 10) {
    return <TestTen allAnswer={Question} view={10} />;
  } 
  else if (testNineView === 8) {
    return <TestEight allAnswer={Question} view={8} />;
  } else {
    return null;
  }
};

export default TestNine;