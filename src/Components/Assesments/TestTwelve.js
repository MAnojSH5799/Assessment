import { Input } from "@mui/material";
import React, { useState } from 'react';
import "../../Css/style.css";
import Scoreboard from "../Scoreboard/index";
import TestThirteen from "./TestThirteen";
import LayOut from "./LayOut";
import Questions from '../Questions.json';
import TestEleven from "./TestEleven";

const containerFourStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};
const TestTewlve = ({ allAnswer, view }) => {
  const [Question, setQuestion] = useState(allAnswer);
  const [testTewlveView, setTestTewlveView] = useState(view);

  const handleTewlveAnswerChange = (e, option) => {
    let newTewlveQuestion = [...Questions];
    newTewlveQuestion.forEach((obj) => {
      if (obj.LevelNumber === option.LevelNumber && obj.QuestionNumber === option.QuestionNumber) {
        if (e.target.value === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newTewlveQuestion);
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
      if (option.LevelNumber === "12" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newTewlveQuestion = Question;
      const count = newTewlveQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "12" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestTewlveView(13)
      }
      else {
         setTestTewlveView(11)
      }
      setQuestion(newTewlveQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (testTewlveView === 12) {
    return (
      <>
          <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Double x Double Multiply (Vertical)</span>
            </div>
            {Questions.map((option, index) =>

              option.LevelNumber === "12" ? (
                <div className="qus" >
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerFourStyle}>
                    <Input
                      variant="outlined"
                      onChange={(e) => handleTewlveAnswerChange(e, option)}
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
  else if (testTewlveView === 13) {
    return <TestThirteen allAnswer={Question} view={13} />;
  } 
  else if (testTewlveView === 11) {
    return <TestEleven allAnswer={Question} view={11} />;
  } else {
    return null;
  }
};

export default TestTewlve;