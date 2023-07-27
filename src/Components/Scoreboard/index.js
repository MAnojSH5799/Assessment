import React from 'react';
import '../../Css/style.css';
import logo from '../../assets/Saarthi-blue.png';
const Scoreboard = ({ allAnswer }) => {
console.log(allAnswer)

  const level1 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "1" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l1",level1)
  const level2 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "2" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l2",level2)

  const level3 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "3" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l3",level3)

  const level4 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "4" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
  console.log("l4",level4)

  const level5 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "5" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
  console.log("l5",level5)

  const level6 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "6" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
  console.log("l6",level6)

  const level7 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "7" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l7",level7)

  const level8 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "8" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l8",level8)

  const level9 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "9" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
  console.log("l9",level9)

  const level10 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "10" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
  console.log("l10",level10)

  const level11 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "11" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l11",level11)

  const level12= allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "12" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l12",level12)

  const level13 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "13" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l13",level13)

  const level14 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "14" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l14",level14)

  const level15 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "15" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l15",level15)

  const level16 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "16" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l16",level16)

  const level17 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "17" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l17",level17)

  const level18 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "18" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l18",level18)

  const level19 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "19" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l19",level19)

  const level20 = allAnswer.reduce((count, question) => {
    if (question.LevelNumber === "20" && question.status === 1) {

      return count + 1;
    }
    return count;
  }, 0);
console.log("l20",level20)

  const handleSubmit = () => {
    window.location.reload();
    window.location = "/Assessment"
  }
  return (
    <>
      <div className="form-group1">
        <img className="img" src={logo} alt="Company Logo" />
      </div>
      <div className="container">


        <div className="main">
          <div className="span"><span className="s1">Scoreboard</span></div>
          <div className="form-group3">
            <div className="qus-1">
              <div className="text-center">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Level</th>
                      <th scope="col">Correct Answers</th>
                      <th scope="col">Total Questions</th>

                    </tr>
                  </thead>
                  <tbody>
                    {level1 != '' ?
                      <tr>
                        <th scope="row">Level 1</th>
                        <td>{level1}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                    {level2 != '' ?
                      <tr>
                        <th scope="row">Level 2</th>
                        <td>{level2}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                    {level3 != '' ? <tr>
                      <th scope="row">Level 3</th>
                      <td>{level3}</td>
                      <td>10</td>
                    </tr> : ""}
                    {level4 != '' ?
                      <tr>
                        <th scope="row">Level 4</th>
                        <td>{level4}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                       {level5 != '' ?
                      <tr>
                        <th scope="row">Level 5</th>
                        <td>{level5}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                       {level6 != '' ?
                      <tr>
                        <th scope="row">Level 6</th>
                        <td>{level6}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level7 != '' ?
                      <tr>
                        <th scope="row">Level 7</th>
                        <td>{level7}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level8 != '' ?
                      <tr>
                        <th scope="row">Level 8</th>
                        <td>{level8}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level9 != '' ?
                      <tr>
                        <th scope="row">Level 9</th>
                        <td>{level9}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level10 != '' ?
                      <tr>
                        <th scope="row">Level 10</th>
                        <td>{level10}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level11 != '' ?
                      <tr>
                        <th scope="row">Level 11</th>
                        <td>{level11}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level12 != '' ?
                      <tr>
                        <th scope="row">Level 12</th>
                        <td>{level12}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level13 != '' ?
                      <tr>
                        <th scope="row">Level 13</th>
                        <td>{level13}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level14 != '' ?
                      <tr>
                        <th scope="row">Level 14</th>
                        <td>{level14}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level15 != '' ?
                      <tr>
                        <th scope="row">Level 15</th>
                        <td>{level15}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level16 != '' ?
                      <tr>
                        <th scope="row">Level 16</th>
                        <td>{level16}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level17 != '' ?
                      <tr>
                        <th scope="row">Level 17</th>
                        <td>{level17}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level18 != '' ?
                      <tr>
                        <th scope="row">Level 18</th>
                        <td>{level18}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level19 != '' ?
                      <tr>
                        <th scope="row">Level 19</th>
                        <td>{level19}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                      {level20 != '' ?
                      <tr>
                        <th scope="row">Level 20</th>
                        <td>{level20}</td>
                        <td>10</td>
                      </tr>
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center">
              <button className="button-sub"
                onClick={handleSubmit}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Scoreboard;