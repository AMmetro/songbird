import React from 'react';
import birdsData from "./Common/birdsData/birdsData";
import './App.css';
import soundPositive from './Common/AnswerBlock/sound/pos.mp3'
import soundNegative from './Common/AnswerBlock/sound/neg.mp3'
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
        gameOver: false,
        birdData:[]
    };

    options = [
        {style: "style1", checked: false},
        {style: "style2", checked: false},
        {style: "style3", checked: false},
        {style: "style4", checked: false},
        {style: "style5", checked: false},
        {style: "style6", checked: false}   ];


    componentDidMount() {
        this.start();

         }

    start = () => {
        let randomNumber = Math.floor(Math.random() * birdsData[this.state.numberOfLevel].length);
        this.setState({randomQuestionNumber: randomNumber});

        let tempBirdData = birdsData[this.state.numberOfLevel].map((element, index) => {
            return {...element, ...this.options[index]}
        });
        this.setState({birdData: tempBirdData});
          };

    nextLevel = () => {
        if (this.state.numberOfLevel >= birdsData.length - 1) {
            alert("Игра окончена");
            this.setState({answerStatus: true});
        } else {
            this.setState({numberOfLevel: this.state.numberOfLevel + 1}, this.start);
            this.setState({quantityAnswer: 0});
            this.setState({userAnswer: null});
            this.setState({answerStatus: false});
                          let resetBirdDataChecked=this.state.birdData.map ((element) => {
                    { return {...element, checked: false }
                    } } );
                this.setState({birdData: resetBirdDataChecked});

        } };

    makeAnswer = (id) => {
        this.setState({userAnswer:id}, this.checkAnswer);
        let birdDataNew=this.state.birdData.map ((element, index) => {
             if (index == id) {{
                    return {...element, checked: true }
                }} else { return element }} );
        this.setState({birdData: birdDataNew})  };


    checkAnswer = () => {
        let bonus = 5 - this.state.quantityAnswer;
        if (this.state.randomQuestionNumber == this.state.userAnswer) {
            this.setState({answerStatus: true});
            this.setState({score: this.state.score + bonus});
            this.player1.play();
        } else {
            this.player2.play();
        }
        this.setState({quantityAnswer: this.state.quantityAnswer + 1});
    };


    render = () => {

        return (
                <div className="App">
                <div className={"mainWrapper"}>
                <div>

                    <audio src={soundPositive} ref={ref => (this.player1 = ref)} ></audio>
                    <audio src={soundNegative} ref={ref => (this.player2 = ref)} ></audio>

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
                        ArrayBird={this.state.birdData}
                        makeAnswer={this.makeAnswer}
                        userAnswer={this.state.userAnswer}
                        answerStatus={this.state.answerStatus}
                        randomQuestionNumber = {this.state.randomQuestionNumber}
                      />

                    {(this.state.userAnswer) ?
                        <DescriptionBlock
                            arrayBird={birdsData[this.state.numberOfLevel][this.state.userAnswer]}
                            audioBird={birdsData[this.state.numberOfLevel][this.state.userAnswer].audio}
                        />
                        :
                        <EmptyDescriptionBlock/>}
                </div>


                    {  (this.state.answerStatus==true
                        && this.state.numberOfLevel == 5) ?
                                                           <button className={"nextLevelButtonEnabled"} >
                                                           Поздравляем! Вы прошли викторину и набрали
                                                           {this.state.score} из 30 возможных баллов </button>
                                                           :
                                                           <button className={!this.state.answerStatus ?
                                                           "nextLevelButtonDisabled" : "nextLevelButtonEnabled" }
                                                           onClick={this.nextLevel}
                                                           disabled={!this.state.answerStatus}>
                                                           next level</button>}
                </div>
            </div>


        );
    }
}

export default App;
