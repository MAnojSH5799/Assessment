import { Input } from "@mui/material";
import React, { useState } from 'react';
import "../../Css/style.css";
import Scoreboard from "../Scoreboard/index";
import TestTwelve from "./TestTwelve";
import LayOut from "./LayOut";
import Questions from '../Questions.json';
import TestTen from "./TestTen";

const containerFourStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};
const TestEleven = ({ allAnswer, view }) => {
  const [Question, setQuestion] = useState(allAnswer);
  const [testElevenView, setTestElevenViewView] = useState(view);

  const handleElevenAnswerChange = (e, option) => {
    let newElevenQuestion = [...Questions];
    newElevenQuestion.forEach((obj) => {
      if (obj.LevelNumber === option.LevelNumber && obj.QuestionNumber === option.QuestionNumber) {
        if (e.target.value === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newElevenQuestion);
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
      if (option.LevelNumber === "11" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newElevenQuestion = Question;
      const count = newElevenQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "11" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestElevenViewView(12)
      }
      else {
         setTestElevenViewView(10)
      }
      setQuestion(newElevenQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (testElevenView === 11) {
    return (
      <>
          <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Double x Single Multiply (Vertical)</span>
            </div>
            {Questions.map((option, index) =>

              option.LevelNumber === "11" ? (
                <div className="qus" >
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerFourStyle}>
                    <Input
                      variant="outlined"
                      onChange={(e) => handleElevenAnswerChange(e, option)}
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
  } 
  else if (testElevenView === 12) {
    return <TestTwelve allAnswer={Question} view={12} />;
  } 
  else if (testElevenView === 10) {
    return <TestTen allAnswer={Question} view={10} />;
  } else {
    return null;
  }
};

export default TestEleven;