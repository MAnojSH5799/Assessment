import { Input } from "@mui/material";
import React, { useState } from 'react';
import "../../Css/style.css";
import Scoreboard from "../Scoreboard/index";
import TestSix from "./TestSix";
import LayOut from "./LayOut";
import TestFour from "./TestFour";

const containerFourStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.1rem',
};
const TestFive = ({ allAnswer, view }) => {
  const [question, setQuestion] = useState(allAnswer);
  const [TestFiveView, setTestFiveView] = useState(view);

  const handleFiveAnswerChange = (e, option) => {
    let newFourQuestion = [...question];
    newFourQuestion.forEach((obj) => {
      if (obj.LevelNumber === option.LevelNumber && obj.QuestionNumber === option.QuestionNumber) {
        if (e.target.value === obj.CorrectAnswer) {
          obj.status = 1;
        }
        else {
          obj.status = 0;
        }
      }
    });
    setQuestion(newFourQuestion);
    const buttons = document.querySelectorAll('.buttonStyle');
    buttons.forEach((button) => {
      button.classList.remove('selected');
      button.style.outline = 'none';
    });
    e.currentTarget.classList.add('selected');
    e.currentTarget.style.outline = '2px solid green';
  };

  const handleFiveSubmit = () => {
    let isAllSelected = true;
    question.forEach((option) => {
      if (option.LevelNumber === "5" && option.status === '') {
        isAllSelected = false;
      }
    });
    if (isAllSelected) {
      let newFourQuestion = question;
      const count = newFourQuestion.reduce((count, question) => {
        if (question.LevelNumber === "5" && question.status === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      if (count > 6) {
        // alert("Congraulations All Level Passed")
        setTestFiveView(6)
      }
      else {
        setTestFiveView(4)
      }
      setQuestion(newFourQuestion);
    } else {
      alert("Please select an option for all questions.");
    }
  };

   if (TestFiveView === 5) {
    return (
      <>
          <LayOut />
          <div className="main pb-0 ">
            <div className="span">
              <span className="s1">Topic : Identify bigger number</span>
            </div>
            {question.map((option, index) =>
              option.LevelNumber === "5" ? (
                <div className="qus">
                  <span className="Qus-num">Q{option.QuestionNumber} . {option.Question}</span>
                  <div style={containerFourStyle}>
                    <Input
                      variant="outlined"
                      onChange={(e) => handleFiveAnswerChange(e, option)}
                      style={{ margin: "0.5rem" }}
                    />
                  </div>
                </div>
              ) : null
            )}
            <div className="sub-btn">
              <button className="Assessment-btn mb-5" onClick={handleFiveSubmit}>
                Submit
              </button>
            </div>
          </div>
      </>
    );
  } else if (TestFiveView === 6) {
    return <TestSix allAnswer={question} view={6} />;
  } 
  else if (TestFiveView === 4) {
    return <TestFour allAnswer={question} view={4} />;
  } 
  else {
    return null;
   }
};

export default TestFive;