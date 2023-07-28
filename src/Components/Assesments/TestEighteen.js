import { Input } from "@mui/material";
import React, { useState } from 'react';
import "../../Css/style.css";
import Scoreboard from "../Scoreboard/index";
import TestNineteen from "./TestNineteen";
import LayOut from "./LayOut";
import Questions from '../Questions.json';
import TestSeventeen from "./TestSeventeen";

const containerFourStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};
const TestEighteen = ({ allAnswer, view }) => {
  const [Question, setQuestion] = useState(allAnswer);
  const [TestEighteenView, setTestEighteenView] = useState(view);

  const handleTewlveAnswerChange = (e, option) => {
    let newEighteenQuestion = [...Questions];
    newEighteenQuestion.forEach((obj) => {
      if (obj.LevelNumber === option.LevelNumber && obj.QuestionNumber === option.QuestionNumber) {
        if (e.target.value === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newEighteenQuestion);
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
      if (option.LevelNumber === "18" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newEighteenQuestion = Question;
      const count = newEighteenQuestion.reduce((count, Question) => {
        if (Question.LevelNumber === "18" && Question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        setTestEighteenView(19)
      }
      else {
         setTestEighteenView(17)
      }
      setQuestion(newEighteenQuestion);
    } else {
      alert("Please select an option for all Questions.");
    }
  };

   if (TestEighteenView === 18) {
    return (
      <>
          <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Triple x Single Multiply (Vertical)</span>
            </div>
            {Questions.map((option, index) =>

              option.LevelNumber === "18" ? (
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
  else if (TestEighteenView === 19) {
    return <TestNineteen allAnswer={Question} view={19} />;
  } 
  else if (TestEighteenView === 17) {
    return <TestSeventeen allAnswer={Question} view={17} />;
  } else {
    return null;
  }
};

export default TestEighteen;