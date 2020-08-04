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
        score:0,
        numberOfLevel: 0,
        randomQuestionNumber: 0,
        quantityAnswer:0,
        userAnswer: null,
           };

 componentDidMount() {
     this.start()
 }

    start= ()=> {
        let randomNumber = Math.floor(Math.random() * birdsData[this.state.numberOfLevel].length);
        this.setState({randomQuestionNumber: randomNumber});
                     };



    nextLevel= ()=> {
        if (this.state.numberOfLevel >= birdsData[this.state.numberOfLevel].length-1  ) {
            alert ("you is winner, game is over")
        }
        else {
            this.setState({numberOfLevel: this.state.numberOfLevel + 1})
            this.setState({quantityAnswer: 0})
            this.setState({userAnswer: null})
            this.start()
        }
                   };


    userAnswer=(e)=> {
            this.setState({userAnswer: e}, this.checkAnswer)
    };

    checkAnswer=()=> {

        let bonus = 5 - this.state.quantityAnswer;

        if (this.state.randomQuestionNumber == this.state.userAnswer) {

            this.setState({score: this.state.score+bonus});

            // then -->  ring bell + next level is active !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            alert("win " + this.state.randomQuestionNumber + this.state.userAnswer)}

        else { alert("NOT " + this.state.randomQuestionNumber + this.state.userAnswer)}

        this.setState({quantityAnswer: this.state.quantityAnswer+1});

    }





render = () => {

            let ArrayBird= birdsData[this.state.numberOfLevel];

        return (
            <div className="App">
                <header className="App-header">

                     <Header
                        numberOfLevel={this.state.numberOfLevel}
                        score={this.state.score}
                     />


                    <QuestionBlock
                        userAnswer={this.state.userAnswer}
                        nameBird={birdsData[this.state.numberOfLevel][this.state.randomQuestionNumber].name}
                        imgBird={birdsData[this.state.numberOfLevel][this.state.randomQuestionNumber].image}
                        audioBird={birdsData[this.state.numberOfLevel][this.state.randomQuestionNumber].audio}
                    />

                    <div className="answerAndDescr">

                            <AnswerBlock
                                 ArrayBird={ArrayBird}
                                 userAnswer={this.userAnswer}
                            />

                            { (this.state.userAnswer) ?
                            <DescriptionBlock
                                arrayBird={birdsData[this.state.numberOfLevel][this.state.userAnswer]}
                                />
                                :
                                <EmptyDescriptionBlock/>}

                    </div>


                    <button className="--------------next level--------------"
                        onClick={this.nextLevel} >next level</button>



                </header>
            </div>
        );
    }
}

export default App;
