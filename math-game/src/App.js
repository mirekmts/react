import React, { Component } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const Stars = (props) => {


    return(
        <div className="col-5">
            {_.range(props.numberofStars).map(i => <i key={i} className="fa fa-star"></i>)}
        </div>
    );
}

const Button = (props) => {
    let button;
    switch(props.answerIsCorrect) {
        case true:
            button = <button className="btn btn-success" onClick={props.acceptAnswer}>
                <i className="fa fa-check"></i>
            </button>;
            break;
        case false:
            button = <button className="btn btn-danger">
                <i className="fa fa-times"></i>
            </button>;
            break;
        default:
            button = <button className="btn"
                onClick={props.checkAnswer}
                disabled={props.selectedNumbers.length === 0}>
                =
            </button>;
            break;
    }
    return(
        <div className="col-2 text-center">
            {button}
            <br /><br />
            <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws === 0}>
                <i className="fa fa-refresh" ></i> {props.redraws}
            </button>
        </div>
    );
}

const Answer = (props) => {
    return(
        <div className="col-5">
            {props.selectedNumbers.map((number, i) =>
                <span key={i}
                    onClick={() => props.unselectNumber(number)}>
                    {number}
                </span>
            )}
        </div>
    );
}

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'used'
        }
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected'
        }
    }
    return(
        <div className="border text-center">
            {Numbers.list.map((number, i) =>
                <span key={i} className={numberClassName(number)}
                    onClick={() => props.selectNumber(number)}>
                    {number}
                </span>
            )}
        </div>
    );
}

Numbers.list = _.range(1,10);

class Game extends Component {
    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
        answerIsCorrect: null,
        usedNumbers: [],
        redraws: 5,
    };
    selectNumber = (clickedNumber) => {
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };
    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers
                                .filter(number => number !== clickedNumber)
        }))
    };
    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    };
    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
        }))
    };
    redraw = () => {
        if (this.state.redraws === 0) {return; }
        this.setState(prevState => ({
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
            answerIsCorrect: null,
            selectedNumbers: [],
            redraws: prevState.redraws - 1,
        }));
    };
  render() {
      const {
          selectedNumbers,
          randomNumberOfStars,
          answerIsCorrect,
          usedNumbers,
          redraws
      } = this.state;
    return (
      <div className="container">
          <h3>play nine</h3>
          <hr />
          <div className="row">
              <Stars numberofStars={randomNumberOfStars} />
              <Button selectedNumbers={selectedNumbers}
                        checkAnswer={this.checkAnswer}
                        redraws={redraws}
                        answerIsCorrect={answerIsCorrect}
                        redraw={this.redraw}
                        acceptAnswer={this.acceptAnswer} />
              <Answer selectedNumbers={selectedNumbers}
                        unselectNumber={this.unselectNumber} />
          </div>
          <br />
          <Numbers selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
                    usedNumbers={usedNumbers} />

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
