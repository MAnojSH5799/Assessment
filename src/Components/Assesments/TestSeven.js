import { Input } from "@mui/material";
import React, { useState } from 'react';
import "../../Css/style.css";
import Scoreboard from "../Scoreboard/index";
import TestEight from "./TestEight";
import TestSix from "./TestSix";
import LayOut from "./LayOut";
import Questions from '../Questions.json';

const containerFourStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};
const TestSeven = ({ allAnswer, view }) => {
  const [Question, setQuestion] = useState(allAnswer);
  const [testSevenView, setTestSevenView] = useState(view);

  const handleSevenAnswerChange = (e, option) => {
    let newSevenQuestion = [...Questions];
    newSevenQuestion.forEach((obj) => {
      if (obj.LevelNumber === option.LevelNumber && obj.QuestionNumber === option.QuestionNumber) {
        if (e.target.value === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newSevenQuestion);
    const buttons = document.querySelectorAll('.buttonStyle');
    buttons.forEach((button) => {
      button.classList.remove('selected');
      button.style.outline = 'none';
    });
    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };

  const handleFourSubmit = () => {
    let isAllSelected = true;
    Question.forEach((option) => {
      if (option.LevelNumber === "7" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newSevenQuestion = Question;
      const count = newSevenQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "7" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestSevenView(8)
      }
      else {
         setTestSevenView(6)
      }
      setQuestion(newSevenQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (testSevenView === 7) {
    return (
      <>
          <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Identify bigger number</span>
            </div>
            {Questions.map((option, index) =>

              option.LevelNumber === "7" ? (
                <div className="qus" >
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerFourStyle}>
                    <Input
                      variant="outlined"
                      onChange={(e) => handleSevenAnswerChange(e, option)}
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
  } else if (testSevenView === 8) {
    return <TestEight allAnswer={Question} view={8} />;
  } 
  else if (testSevenView === 6) {
    return <TestSix allAnswer={Question} view={6} />;
  } else {
    return null;
  }
};

export default TestSeven;