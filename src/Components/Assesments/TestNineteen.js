import { Input } from "@mui/material";
import React, { useState } from 'react';
import "../../Css/style.css";
import Scoreboard from "../Scoreboard/index";
import TestTwenty from "./TestTwenty";
import LayOut from "./LayOut";
import Questions from '../Questions.json';
import TestEighteen from "./TestEighteen";

const containerFourStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};
const TestNineteen = ({ allAnswer, view }) => {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestNineteenView, setTestNineteenView] = useState(view);

  const handleTewlveAnswerChange = (e, option) => {
    let newNineteenQuestion = [...Questions];
    newNineteenQuestion.forEach((obj) => {
      if (obj.LevelNumber === option.LevelNumber && obj.QuestionNumber === option.QuestionNumber) {
        if (e.target.value === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newNineteenQuestion);
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
      if (option.LevelNumber === "19" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newNineteenQuestion = Question;
      const count = newNineteenQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "19" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestNineteenView(20)
      }
      else {
         setTestNineteenView(18)
      }
      setQuestion(newNineteenQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestNineteenView === 19) {
    return (
      <>
          <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Triple x Triple Multiply (Vertical)</span>
            </div>
            {Questions.map((option, index) =>

              option.LevelNumber === "19" ? (
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
  else if (TestNineteenView === 20) {
    return <TestTwenty allAnswer={Question} view={20} />;
  } 
  else if (TestNineteenView === 18) {
    return <TestEighteen allAnswer={Question} view={18} />;
  } else {
    return null;
  }
};

export default TestNineteen;