import React from 'react';
import birdsData from "./Common/birdsData/birdsData";
import './App.css';
import Header from "./Common/Header/Header";
import QuestionBlock from "./Common/Question/QuestionBlock";
import AnswerBlock from "./Common/AnswerBlock/AnswerBlock";
import DescriptionBlock from "./Common/DescriptionBlock/DescriptionBlock";
import EmptyDescriptionBlock from "./Common/DescriptionBlock/EmptyDescriptionBlock";

class App extends React.Component {

    state = {
        score: 0,
        numberOfLevel: 0,
        randomQuestionNumber: 0,
        quantityAnswer: 0,
        userAnswer: null,
        answerStatus: false,
    };

    componentDidMount() {
        this.start()
    }

    start = () => {
        let randomNumber = Math.floor(Math.random() * birdsData[this.state.numberOfLevel].length);
        this.setState({randomQuestionNumber: randomNumber});
    };


    nextLevel = () => {
        if (this.state.numberOfLevel >= birdsData[this.state.numberOfLevel].length - 1) {
            alert("you is winner, game is over");
            this.setState({answerStatus: true});
        } else {
            this.setState({numberOfLevel: this.state.numberOfLevel + 1});
            this.setState({quantityAnswer: 0});
            this.setState({userAnswer: null});
            this.setState({answerStatus: false});
            this.start()
        }
    };


    makeAnswer = (e) => {
        this.setState({userAnswer: e}, this.checkAnswer)
    };

    checkAnswer = () => {

        let bonus = 5 - this.state.quantityAnswer;
        if (this.state.randomQuestionNumber == this.state.userAnswer) {
            this.setState({answerStatus: true});
            this.setState({score: this.state.score + bonus});
            // then -->  ring bell + next level is active !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            alert("win " + this.state.randomQuestionNumber + this.state.userAnswer)
        } else {
            alert("NOT " + this.state.randomQuestionNumber + this.state.userAnswer)
        }
        this.setState({quantityAnswer: this.state.quantityAnswer + 1});
    }


    render = () => {

        let ArrayBird = birdsData[this.state.numberOfLevel];



        return (


            <div className="App">


                <div className={"mainWrapper"}>

                <div>
                        <Header
                            numberOfLevel={this.state.numberOfLevel}
                            score={this.state.score}                 />
                </div>

                <div>
                        <QuestionBlock
                            answerStatus={this.state.answerStatus}
                            nameBird={birdsData[this.state.numberOfLevel][this.state.randomQuestionNumber].name}
                            imgBird={birdsData[this.state.numberOfLevel][this.state.randomQuestionNumber].image}
                            audioBird={birdsData[this.state.numberOfLevel][this.state.randomQuestionNumber].audio}
                        />
                 </div>


                <div className="answerAndDescr">
                    <AnswerBlock
                        ArrayBird={ArrayBird}
                        makeAnswer={this.makeAnswer}
                        userAnswer={this.state.userAnswer}
                        answerStatus={this.state.answerStatus}
                    />

                    {(this.state.userAnswer) ?
                        <DescriptionBlock
                            arrayBird={birdsData[this.state.numberOfLevel][this.state.userAnswer]}
                        />
                        :
                        <EmptyDescriptionBlock/>}
                </div>



                <button className={"nextLevelButton"} onClick={this.nextLevel} >next level</button>

                </div>
            </div>
        );
    }
}

export default App;
